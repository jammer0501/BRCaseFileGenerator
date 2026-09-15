import { test } from 'node:test';
import assert from 'node:assert/strict';
import { randomItem, pickWeighted } from '../js/random.js';

test('randomItem returns one of the given items', () => {
  const items = ['x', 'y', 'z'];
  for (let i = 0; i < 30; i++) {
    assert.ok(items.includes(randomItem(items)));
  }
});

test('pickWeighted picks proportionally to weight, deterministically by injected random', () => {
  const entries = [{ id: 'a', weight: 1 }, { id: 'b', weight: 3 }];
  // total weight 4: [0, 1) -> a, [1, 4) -> b
  assert.equal(pickWeighted(entries, () => 0).id, 'a');
  assert.equal(pickWeighted(entries, () => 0.24).id, 'a');
  assert.equal(pickWeighted(entries, () => 0.26).id, 'b');
  assert.equal(pickWeighted(entries, () => 0.9999).id, 'b');
});

test('pickWeighted treats a missing weight as 1', () => {
  const entries = [{ id: 'a' }, { id: 'b', weight: 2 }];
  // total weight 3: [0, 1) -> a, [1, 3) -> b
  assert.equal(pickWeighted(entries, () => 0).id, 'a');
  assert.equal(pickWeighted(entries, () => 0.9).id, 'b');
});
