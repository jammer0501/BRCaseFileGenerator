import { test } from 'node:test';
import assert from 'node:assert/strict';
import { randomItem, randomSample, pickWeighted } from '../js/random.js';

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

test('randomSample returns distinct items from the input', () => {
  const items = ['a', 'b', 'c', 'd', 'e'];
  for (let i = 0; i < 100; i++) {
    const sample = randomSample(items, 3);
    assert.equal(sample.length, 3);
    assert.equal(new Set(sample).size, 3);
    assert.ok(sample.every((item) => items.includes(item)));
  }
  assert.deepEqual(randomSample(items, 5).sort(), items);
  assert.throws(() => randomSample(items, 6));
});
