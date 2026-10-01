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

const STAGES = ['CRIME_SCENE', 'CULPRIT_HAUNT', 'CONFRONTATION'];

function roleOf(locationRoles, locationIndex) {
  return locationRoles.find((r) => r.locationIndex === locationIndex).role;
}

test('a clue never points to the location it was found at', () => {
  for (let i = 0; i < 200; i++) {
    const c = generateCase();
    const { clueLinks } = generateRelationships(c);
    for (const { foundAt, pointsTo } of clueLinks) {
      if (foundAt.kind === 'location' && pointsTo.kind === 'location') {
        assert.notEqual(pointsTo.locationIndex, foundAt.locationIndex);
      }
    }
  }
});

test('clues only point forward along the trail, never to the Crime Scene', () => {
  for (let i = 0; i < 200; i++) {
    const c = generateCase();
    const { locationRoles, clueLinks } = generateRelationships(c);
    for (const { foundAt, pointsTo } of clueLinks) {
      if (pointsTo.kind !== 'location') continue;
      const toStage = STAGES.indexOf(roleOf(locationRoles, pointsTo.locationIndex));
      assert.ok(toStage > 0, 'points to the Crime Scene');
      if (foundAt.kind === 'location') {
        const fromStage = STAGES.indexOf(roleOf(locationRoles, foundAt.locationIndex));
        assert.ok(toStage > fromStage, 'points backward or sideways');
      }
    }
  }
});

test('every trail leads to the Haunt and Confrontation Site and implicates the culprit', () => {
  for (let i = 0; i < 200; i++) {
    const c = generateCase();
    const { locationRoles, clueLinks } = generateRelationships(c);
    const leadsTo = (role) => clueLinks.some((l) =>
      l.pointsTo.kind === 'location' && roleOf(locationRoles, l.pointsTo.locationIndex) === role);
    assert.ok(clueLinks.some((l) => l.pointsTo.kind === 'culprit'));
    assert.ok(leadsTo('CULPRIT_HAUNT'));
    assert.ok(leadsTo('CONFRONTATION'));
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
