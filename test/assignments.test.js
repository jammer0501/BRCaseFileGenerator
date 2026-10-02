import { test } from 'node:test';
import assert from 'node:assert/strict';
import { generateTheme, generateAssignment, THEMES, ALL_ASSIGNMENTS } from '../js/tables/assignments.js';
import { generateLocationMatching, locationMatches } from '../js/tables/locations.js';
import { generateNpcMatching, npcMatches } from '../js/tables/npcs.js';

test('generateTheme returns a known theme', () => {
  for (let i = 0; i < 30; i++) {
    const theme = generateTheme();
    assert.ok(THEMES.some((t) => t.id === theme), `unknown theme: ${theme}`);
  }
});

test('generateAssignment returns an assignment with non-empty text', () => {
  const assignment = generateAssignment();
  assert.equal(typeof assignment.text, 'string');
  assert.ok(assignment.text.length > 0);
});

// Catches typos in hints: every hinted location and NPC must be producible
// from the tables.
test('every assignment hint can be satisfied by the tables', () => {
  for (const { text, crimeScene, culprit, redHerring } of ALL_ASSIGNMENTS) {
    for (const hint of [crimeScene ?? []].flat()) {
      assert.ok(locationMatches(generateLocationMatching(hint), hint), text);
    }
    const npcHints = redHerring ? [redHerring.suspect, redHerring.alternative] : [culprit].filter(Boolean);
    for (const hint of npcHints) {
      assert.ok(npcMatches(generateNpcMatching(hint), hint), text);
    }
    if (redHerring) {
      assert.ok(redHerring.suspect.label && redHerring.alternative.label, text);
      assert.ok(!culprit, `${text}: use redHerring or culprit, not both`);
    }
  }
});
