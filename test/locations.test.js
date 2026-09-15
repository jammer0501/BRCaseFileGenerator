import { test } from 'node:test';
import assert from 'node:assert/strict';
import { generateLocation, formatLocation, SECTORS } from '../js/tables/locations.js';

test('generateLocation returns a valid location in a known sector', () => {
  for (let i = 0; i < 100; i++) {
    const loc = generateLocation();
    assert.ok(Object.keys(SECTORS).includes(loc.sector), `unknown sector: ${loc.sector}`);
    assert.ok(loc.area.length > 0);
    assert.ok(loc.location.length > 0);
  }
});

test('formatLocation includes the sector description', () => {
  const loc = { sector: 'NINE', area: 'LA Central Library', location: 'Grand Lobby' };
  assert.equal(formatLocation(loc), 'Grand Lobby, LA Central Library, Sector NINE: Commercial District');
});
