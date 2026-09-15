import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createTwist, createFinalConfrontation, createMoodPiece, formatMoodPiece, TWISTS, CONFRONTATIONS } from '../js/tables/supplementary.js';

test('createTwist and createFinalConfrontation draw from disjoint tables', () => {
  const overlap = TWISTS.filter((t) => CONFRONTATIONS.includes(t));
  assert.equal(overlap.length, 0, 'twist and final-confrontation tables should not share text');

  for (let i = 0; i < 20; i++) {
    assert.ok(TWISTS.includes(createTwist()));
    assert.ok(CONFRONTATIONS.includes(createFinalConfrontation()));
  }
});

test('formatMoodPiece produces the expected sentence shape', () => {
  const mood = { weather: 'Smog', screen: 'travel ad', passing: 'A street sweeper vehicle' };
  assert.equal(formatMoodPiece(mood), 'A travel ad is on a screen. A street sweeper vehicle is passing by. The weather is: Smog');
});

test('createMoodPiece returns a fully-populated mood', () => {
  const mood = createMoodPiece();
  assert.ok(mood.weather.length > 0);
  assert.ok(mood.screen.length > 0);
  assert.ok(mood.passing.length > 0);
});
