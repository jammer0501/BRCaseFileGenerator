import { test } from 'node:test';
import assert from 'node:assert/strict';
import { NPC_TYPES, generateNpc, generateNpcs, formatNpc } from '../js/tables/npcs.js';

test('generateNpc returns a fully-populated NPC of a known type', () => {
  for (let i = 0; i < 50; i++) {
    const npc = generateNpc();
    assert.ok(NPC_TYPES.includes(npc.type));
    assert.ok(npc.occupation.length > 0);
    assert.ok(npc.quirk.length > 0);
    assert.ok(npc.firstName.length > 0);
    assert.ok(npc.lastName.length > 0);
  }
});

test('generateNpcs returns exactly the requested count', () => {
  assert.equal(generateNpcs(5).length, 5);
  assert.equal(generateNpcs(0).length, 0);
});

test('formatNpc produces the expected sentence shape', () => {
  const npc = { type: 'TECH', occupation: 'Engineer', quirk: 'Arrogant', firstName: 'Amar', lastName: 'Banks' };
  assert.equal(formatNpc(npc), 'TECH: Amar Banks is a Engineer whose quirk is: Arrogant');
});
