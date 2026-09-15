import { test } from 'node:test';
import assert from 'node:assert/strict';
import { generateTheme, generateAssignment, THEMES } from '../js/tables/assignments.js';

test('generateTheme returns a known theme', () => {
  for (let i = 0; i < 30; i++) {
    const theme = generateTheme();
    assert.ok(THEMES.some((t) => t.id === theme), `unknown theme: ${theme}`);
  }
});

test('generateAssignment returns a non-empty string', () => {
  const assignment = generateAssignment();
  assert.equal(typeof assignment, 'string');
  assert.ok(assignment.length > 0);
});
