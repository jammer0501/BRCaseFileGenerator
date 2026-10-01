import { randomItem } from './random.js';
import { formatLocation } from './tables/locations.js';
import { formatClue } from './tables/clues.js';

const MOTIVES = [
  'Revenge for a past wrong',
  'Financial desperation',
  'Protecting a secret',
  'Coerced by a corporation',
  'Blind loyalty to someone dangerous',
  'Jealousy',
];

const LOCATION_ROLES = ['CRIME_SCENE', 'CULPRIT_HAUNT', 'CONFRONTATION'];

const LOCATION_ROLE_LABELS = {
  CRIME_SCENE: 'Crime Scene',
  CULPRIT_HAUNT: "Culprit's Haunt",
  CONFRONTATION: 'Confrontation Site',
};

function randomIndex(count) {
  return Math.floor(Math.random() * count);
}

// Fisher-Yates shuffle of [0, count) used to assign locations to roles.
function shuffledIndices(count) {
  const indices = Array.from({ length: count }, (_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices;
}

function generateLocationRoles(locationCount) {
  const order = shuffledIndices(locationCount);
  return LOCATION_ROLES.map((role, i) => ({ locationIndex: order[i], role }));
}

function locationFor(locationRoles, role) {
  return locationRoles.find((r) => r.role === role).locationIndex;
}

// Witness clues are already a "who" — foundAt must be where they were
// encountered, not a second NPC. `allowedRoles` limits which locations
// the clue can be found at.
function generateFoundAt(clue, npcCount, locationRoles, allowedRoles = LOCATION_ROLES) {
  if (clue.type === 'WITNESS' || Math.random() < 0.5) {
    const role = randomItem(allowedRoles);
    return { kind: 'location', locationIndex: locationFor(locationRoles, role) };
  }
  return { kind: 'npc', npcIndex: randomIndex(npcCount) };
}

// The trail only moves forward: Crime Scene → Culprit's Haunt →
// Confrontation Site. A clue can point to a location later in the chain
// than where it was found (never the Crime Scene itself, which the
// investigators already know), or to the culprit. Clues found on an NPC
// sit outside the chain and can point to any later location.
function forwardTargets(foundAt, locationRoles) {
  const fromStage = foundAt.kind === 'location'
    ? LOCATION_ROLES.indexOf(locationRoles.find((r) => r.locationIndex === foundAt.locationIndex).role)
    : 0;
  return LOCATION_ROLES.slice(fromStage + 1);
}

// Most clues move the investigation along; only 1 in 3 (where a location
// is still available) implicates the culprit directly.
function generatePointsTo(foundAt, locationRoles) {
  const targets = forwardTargets(foundAt, locationRoles);
  if (targets.length === 0 || Math.random() < 1 / 3) return { kind: 'culprit' };
  return { kind: 'location', locationIndex: locationFor(locationRoles, randomItem(targets)) };
}

// Every trail forms a full chain — something leads to the Culprit's Haunt,
// something leads to the Confrontation Site, and something implicates the
// culprit. A distinct clue is reserved for each; the rest are rolled freely.
// Each reserved location clue is found earlier in the chain than its target.
const RESERVED_LINKS = [
  { pointsTo: 'CULPRIT_HAUNT', foundAtRoles: ['CRIME_SCENE'] },
  { pointsTo: 'CONFRONTATION', foundAtRoles: ['CRIME_SCENE', 'CULPRIT_HAUNT'] },
  { pointsTo: 'culprit', foundAtRoles: LOCATION_ROLES },
];

function generateClueLinks(c, locationRoles) {
  const reservedFor = new Map(
    shuffledIndices(c.clues.length).slice(0, RESERVED_LINKS.length)
      .map((clueIndex, i) => [clueIndex, RESERVED_LINKS[i]])
  );

  return c.clues.map((clue, clueIndex) => {
    const reserved = reservedFor.get(clueIndex);
    if (!reserved) {
      const foundAt = generateFoundAt(clue, c.npcs.length, locationRoles);
      return { clueIndex, foundAt, pointsTo: generatePointsTo(foundAt, locationRoles) };
    }
    const foundAt = generateFoundAt(clue, c.npcs.length, locationRoles, reserved.foundAtRoles);
    const pointsTo = reserved.pointsTo === 'culprit'
      ? { kind: 'culprit' }
      : { kind: 'location', locationIndex: locationFor(locationRoles, reserved.pointsTo) };
    return { clueIndex, foundAt, pointsTo };
  });
}

export function generateRelationships(c) {
  const culprit = {
    npcIndex: randomIndex(c.npcs.length),
    motive: randomItem(MOTIVES),
  };

  const locationRoles = generateLocationRoles(c.locations.length);
  const clueLinks = generateClueLinks(c, locationRoles);

  return { culprit, locationRoles, clueLinks };
}

function locationRoleLabel(locationRoles, locationIndex) {
  const entry = locationRoles.find((r) => r.locationIndex === locationIndex);
  return LOCATION_ROLE_LABELS[entry.role];
}

function formatFoundAt(clue, foundAt, c, culpritNpcIndex, locationRoles) {
  if (foundAt.kind === 'location') {
    const roleLabel = locationRoleLabel(locationRoles, foundAt.locationIndex);
    const verb = clue.type === 'WITNESS' ? 'encountered at' : 'found at';
    return `${verb} the ${roleLabel}`;
  }
  const npc = c.npcs[foundAt.npcIndex];
  const suffix = foundAt.npcIndex === culpritNpcIndex ? ' (the culprit)' : '';
  return `found on ${npc.firstName} ${npc.lastName}${suffix}`;
}

function formatPointsTo(pointsTo, locationRoles) {
  if (pointsTo.kind === 'culprit') return 'points to the culprit';
  return `points to the ${locationRoleLabel(locationRoles, pointsTo.locationIndex)}`;
}

// Structured, display-ready text for each part of the solution — the page
// renders this as HTML; formatRelationships flattens it to plain text.
export function describeRelationships(c, relationships) {
  const { culprit, locationRoles, clueLinks } = relationships;
  const culpritNpc = c.npcs[culprit.npcIndex];

  return {
    culprit: {
      name: `${culpritNpc.firstName} ${culpritNpc.lastName}`,
      detail: `${culpritNpc.type}: ${culpritNpc.occupation}`,
      motive: culprit.motive,
    },
    locations: LOCATION_ROLES.map((role) => ({
      label: LOCATION_ROLE_LABELS[role],
      text: formatLocation(c.locations[locationFor(locationRoles, role)]),
    })),
    clues: clueLinks.map((link) => {
      const clue = c.clues[link.clueIndex];
      return {
        text: formatClue(clue),
        foundAt: formatFoundAt(clue, link.foundAt, c, culprit.npcIndex, locationRoles),
        pointsTo: formatPointsTo(link.pointsTo, locationRoles),
      };
    }),
  };
}

export function formatRelationships(c, relationships) {
  const { culprit, locations, clues } = describeRelationships(c, relationships);
  const lines = [];

  lines.push('CASE SOLUTION:');
  lines.push(`Culprit: ${culprit.name} (${culprit.detail}) — Motive: ${culprit.motive}`);
  for (const { label, text } of locations) lines.push(`${label}: ${text}`);

  lines.push('');
  lines.push('CLUE TRAIL:');
  for (const { text, foundAt, pointsTo } of clues) {
    lines.push(`${text} — ${foundAt} → ${pointsTo}`);
  }

  return lines.join('\n');
}
