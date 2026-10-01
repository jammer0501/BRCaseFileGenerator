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

function generateFoundAt(clue, npcCount, locationCount) {
  // Witness clues are already a "who" — foundAt must be where they were
  // encountered, not a second NPC.
  if (clue.type === 'WITNESS' || Math.random() < 0.5) {
    return { kind: 'location', locationIndex: randomIndex(locationCount) };
  }
  return { kind: 'npc', npcIndex: randomIndex(npcCount) };
}

function generatePointsTo(locationCount) {
  if (Math.random() < 0.5) return { kind: 'culprit' };
  return { kind: 'location', locationIndex: randomIndex(locationCount) };
}

export function generateRelationships(c) {
  const culprit = {
    npcIndex: randomIndex(c.npcs.length),
    motive: randomItem(MOTIVES),
  };

  const locationRoles = generateLocationRoles(c.locations.length);

  const clueLinks = c.clues.map((clue, clueIndex) => ({
    clueIndex,
    foundAt: generateFoundAt(clue, c.npcs.length, c.locations.length),
    pointsTo: generatePointsTo(c.locations.length),
  }));

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

export function formatRelationships(c, relationships) {
  const { culprit, locationRoles, clueLinks } = relationships;
  const culpritNpc = c.npcs[culprit.npcIndex];
  const lines = [];

  lines.push('CASE SOLUTION:');
  lines.push(
    `Culprit: ${culpritNpc.firstName} ${culpritNpc.lastName} (${culpritNpc.type}: ${culpritNpc.occupation}) — Motive: ${culprit.motive}`
  );
  for (const role of LOCATION_ROLES) {
    const entry = locationRoles.find((r) => r.role === role);
    lines.push(`${LOCATION_ROLE_LABELS[role]}: ${formatLocation(c.locations[entry.locationIndex])}`);
  }

  lines.push('');
  lines.push('CLUE TRAIL:');
  for (const link of clueLinks) {
    const clue = c.clues[link.clueIndex];
    const foundAtText = formatFoundAt(clue, link.foundAt, c, culprit.npcIndex, locationRoles);
    const pointsToText = formatPointsTo(link.pointsTo, locationRoles);
    lines.push(`${formatClue(clue)} — ${foundAtText} → ${pointsToText}`);
  }

  return lines.join('\n');
}
