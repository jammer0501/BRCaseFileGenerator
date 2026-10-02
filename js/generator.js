import { generateAssignment } from './tables/assignments.js';
import { generateNpcs, generateNpcMatching, npcMatches, formatNpc } from './tables/npcs.js';
import { generateLocation, generateLocationMatching, locationMatches, formatLocation } from './tables/locations.js';
import { generateClue, formatClue } from './tables/clues.js';
import { createTwist, createFinalConfrontation, createMoodPiece, formatMoodPiece } from './tables/supplementary.js';

// Java: ThreadLocalRandom.nextInt(1, 3 + 1) + 3 -> 1..3, then +3 -> 4..6.
function randomNpcCount() {
  return Math.floor(Math.random() * 3) + 1 + 3;
}

function randomIndex(count) {
  return Math.floor(Math.random() * count);
}

// The NPC hints the case must be able to satisfy, each by a different NPC.
function npcHintsFor(assignment) {
  if (assignment.redHerring) return [assignment.redHerring.suspect, assignment.redHerring.alternative];
  if (assignment.culprit) return [assignment.culprit];
  return [];
}

// Makes sure each hint has its own matching NPC, replacing an unclaimed NPC
// with a matching one where needed.
function satisfyNpcHints(npcs, hints) {
  const claimed = new Set();
  for (const hint of hints) {
    let index = npcs.findIndex((npc, i) => !claimed.has(i) && npcMatches(npc, hint));
    if (index === -1) {
      const free = npcs.map((_, i) => i).filter((i) => !claimed.has(i));
      index = free[randomIndex(free.length)];
      npcs[index] = generateNpcMatching(hint);
    }
    claimed.add(index);
  }
  return npcs;
}

// If the assignment names a crime scene, one of the locations (at a random
// position) is rolled to match it.
function generateLocations(assignment) {
  const locations = Array.from({ length: 3 }, () => generateLocation());
  if (assignment.crimeScene && !locations.some((loc) => locationMatches(loc, assignment.crimeScene))) {
    locations[randomIndex(locations.length)] = generateLocationMatching(assignment.crimeScene);
  }
  return locations;
}

export function generateCase(assignment = generateAssignment()) {
  return {
    assignment,
    npcs: satisfyNpcHints(generateNpcs(randomNpcCount()), npcHintsFor(assignment)),
    locations: generateLocations(assignment),
    clues: Array.from({ length: 5 }, () => generateClue()),
    moods: Array.from({ length: 3 }, () => createMoodPiece()),
    twist: createTwist(),
    finalConfrontation: createFinalConfrontation(),
  };
}

export function formatCase(c) {
  const lines = [];
  lines.push('ASSIGNMENT:', c.assignment.text, '');
  lines.push('NPCS:');
  c.npcs.forEach((npc) => lines.push(formatNpc(npc)));
  lines.push('');
  lines.push('LOCATIONS:');
  c.locations.forEach((loc) => lines.push(formatLocation(loc)));
  lines.push('');
  lines.push('CLUES:');
  c.clues.forEach((clue) => lines.push(formatClue(clue)));
  lines.push('');
  lines.push('MOODS:');
  c.moods.forEach((mood) => lines.push(formatMoodPiece(mood)));
  lines.push('');
  lines.push('TWIST:', c.twist, '');
  lines.push('FINAL CONFRONTATION:', c.finalConfrontation);
  return lines.join('\n');
}
