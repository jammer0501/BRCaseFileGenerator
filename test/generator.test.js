import { test } from 'node:test';
import assert from 'node:assert/strict';
import { generateCase, formatCase } from '../js/generator.js';
import { TWISTS, CONFRONTATIONS } from '../js/tables/supplementary.js';

test('generateCase returns a fully-populated case', () => {
  const c = generateCase();
  assert.equal(typeof c.assignment.text, 'string');
  assert.ok(c.npcs.length >= 4 && c.npcs.length <= 6, `expected 4-6 NPCs, got ${c.npcs.length}`);
  assert.equal(c.locations.length, 3);
  assert.equal(c.clues.length, 5);
  assert.equal(c.moods.length, 3);
  assert.ok(TWISTS.includes(c.twist));
});

// Regression test for the bug ported from Generator.java: FINAL CONFRONTATION
// reused SupplementaryTables.createTwist() instead of createFinalConfrontation().
// This is expected to FAIL until Step 2 fixes generator.js's wiring — that's
// the point: it proves the test would have caught the original bug.
test('final confrontation is drawn from the confrontations table, not the twists table', () => {
  const c = generateCase();
  assert.ok(
    CONFRONTATIONS.includes(c.finalConfrontation),
    `expected a final-confrontation line, got a twist line instead: "${c.finalConfrontation}"`
  );
});

test('formatCase includes every section header', () => {
  const text = formatCase(generateCase());
  for (const header of ['ASSIGNMENT:', 'NPCS:', 'LOCATIONS:', 'CLUES:', 'MOODS:', 'TWIST:', 'FINAL CONFRONTATION:']) {
    assert.ok(text.includes(header), `missing header ${header}`);
  }
});

test('no two people in a case share a name, witnesses included', () => {
  for (let i = 0; i < 200; i++) {
    const c = generateCase();
    const people = [...c.npcs, ...c.clues.filter((clue) => clue.type === 'WITNESS').map((clue) => clue.witness)];
    const names = people.map((p) => `${p.firstName} ${p.lastName}`);
    assert.equal(new Set(names).size, names.length, names.join(', '));
  }
});
