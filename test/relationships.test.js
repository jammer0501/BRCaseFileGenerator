import { test } from 'node:test';
import assert from 'node:assert/strict';
import { generateCase } from '../js/generator.js';
import { generateRelationships, formatRelationships } from '../js/relationships.js';

test('culprit is a valid case NPC index', () => {
  for (let i = 0; i < 30; i++) {
    const c = generateCase();
    const { culprit } = generateRelationships(c);
    assert.ok(culprit.npcIndex >= 0 && culprit.npcIndex < c.npcs.length);
    assert.equal(typeof culprit.motive, 'string');
    assert.ok(culprit.motive.length > 0);
  }
});

test('all 3 locations get distinct roles', () => {
  for (let i = 0; i < 30; i++) {
    const c = generateCase();
    const { locationRoles } = generateRelationships(c);
    assert.equal(locationRoles.length, 3);

    const locationIndices = locationRoles.map((r) => r.locationIndex).sort();
    assert.deepEqual(locationIndices, [0, 1, 2]);

    const roles = new Set(locationRoles.map((r) => r.role));
    assert.equal(roles.size, 3);
    assert.ok(roles.has('CRIME_SCENE'));
    assert.ok(roles.has('CULPRIT_HAUNT'));
    assert.ok(roles.has('CONFRONTATION'));
  }
});

test('every clue gets both foundAt and pointsTo', () => {
  for (let i = 0; i < 30; i++) {
    const c = generateCase();
    const { clueLinks } = generateRelationships(c);
    assert.equal(clueLinks.length, c.clues.length);
    for (const link of clueLinks) {
      assert.ok(link.foundAt);
      assert.ok(link.pointsTo);
      assert.ok(['location', 'npc'].includes(link.foundAt.kind));
      assert.ok(['location', 'culprit'].includes(link.pointsTo.kind));
    }
  }
});

test('witness clues never get foundAt.kind === "npc"', () => {
  for (let i = 0; i < 30; i++) {
    const c = generateCase();
    const { clueLinks } = generateRelationships(c);
    for (const link of clueLinks) {
      const clue = c.clues[link.clueIndex];
      if (clue.type === 'WITNESS') {
        assert.equal(link.foundAt.kind, 'location');
      }
    }
  }
});

test('formatRelationships includes solution and clue trail headers', () => {
  const c = generateCase();
  const text = formatRelationships(c, generateRelationships(c));
  assert.ok(text.includes('CASE SOLUTION:'));
  assert.ok(text.includes('CLUE TRAIL:'));
  assert.ok(text.includes('Culprit:'));
  assert.ok(text.includes('Crime Scene:'));
  assert.ok(text.includes("Culprit's Haunt:"));
  assert.ok(text.includes('Confrontation Site:'));
});
