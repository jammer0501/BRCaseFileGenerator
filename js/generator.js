import { generateAssignment } from './tables/assignments.js';
import { generateNpcs, formatNpc } from './tables/npcs.js';
import { generateLocation, formatLocation } from './tables/locations.js';
import { generateClue, formatClue } from './tables/clues.js';
import { createTwist, createMoodPiece, formatMoodPiece } from './tables/supplementary.js';

// Java: ThreadLocalRandom.nextInt(1, 3 + 1) + 3 -> 1..3, then +3 -> 4..6.
function randomNpcCount() {
  return Math.floor(Math.random() * 3) + 1 + 3;
}

export function generateCase() {
  return {
    assignment: generateAssignment(),
    npcs: generateNpcs(randomNpcCount()),
    locations: Array.from({ length: 3 }, () => generateLocation()),
    clues: Array.from({ length: 5 }, () => generateClue()),
    moods: Array.from({ length: 3 }, () => createMoodPiece()),
    twist: createTwist(),
    // BUG (ported from Generator.java): this should call createFinalConfrontation(),
    // but the original calls createTwist() again. Fixed in Step 2.
    finalConfrontation: createTwist(),
  };
}

export function formatCase(c) {
  const lines = [];
  lines.push('ASSIGNMENT:', c.assignment, '');
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
