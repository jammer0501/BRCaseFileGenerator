import { test } from 'node:test';
import assert from 'node:assert/strict';
import { generateClue, formatClue } from '../js/tables/clues.js';

test('witness clues carry an NPC and format correctly', () => {
  let sawWitness = false;
  for (let i = 0; i < 100 && !sawWitness; i++) {
    const clue = generateClue();
    if (clue.type === 'WITNESS') {
      sawWitness = true;
      assert.ok(clue.witness);
      assert.ok(formatClue(clue).startsWith('Witness:'));
    }
  }
  assert.ok(sawWitness, 'expected at least one witness clue in 100 draws');
});

test('non-witness clues carry text and format correctly', () => {
  for (let i = 0; i < 100; i++) {
    const clue = generateClue();
    if (clue.type !== 'WITNESS') {
      assert.ok(clue.text.length > 0);
      assert.ok(formatClue(clue).length > 0);
    }
  }
});
