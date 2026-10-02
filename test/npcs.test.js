import { test } from 'node:test';
import assert from 'node:assert/strict';
import { NPC_TYPES, createNpc, generateNpc, generateNpcs, withDistinctNames, formatNpc } from '../js/tables/npcs.js';

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

test('withDistinctNames gives every NPC a different full name, keeping the rest', () => {
  for (let i = 0; i < 200; i++) {
    const npcs = Array.from({ length: 11 }, () => createNpc('CRIME'));
    const named = withDistinctNames(npcs);
    assert.equal(new Set(named.map((n) => `${n.firstName} ${n.lastName}`)).size, 11);
    named.forEach((npc, j) => {
      assert.equal(npc.type, npcs[j].type);
      assert.equal(npc.occupation, npcs[j].occupation);
      assert.equal(npc.quirk, npcs[j].quirk);
    });
  }
});

test('withDistinctNames avoids shared first names and surnames while the pools allow', () => {
  for (let i = 0; i < 200; i++) {
    const named = withDistinctNames(Array.from({ length: 6 }, () => createNpc('TECH')));
    assert.equal(new Set(named.map((n) => n.firstName)).size, 6);
    assert.equal(new Set(named.map((n) => n.lastName)).size, 6);
  }
});
