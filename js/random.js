export function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

// Picks `count` different items at random (a partial Fisher-Yates shuffle).
export function randomSample(items, count) {
  if (count > items.length) throw new Error(`Cannot pick ${count} distinct items from ${items.length}`);
  const pool = [...items];
  for (let i = 0; i < count; i++) {
    const j = i + Math.floor(Math.random() * (pool.length - i));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}

// Picks an entry at random, biased by each entry's `weight` (default 1 when
// omitted). `random` is injectable so callers can test selection
// deterministically instead of relying on statistical sampling.
export function pickWeighted(entries, random = Math.random) {
  const total = entries.reduce((sum, entry) => sum + (entry.weight ?? 1), 0);
  let roll = random() * total;
  for (const entry of entries) {
    const weight = entry.weight ?? 1;
    if (roll < weight) return entry;
    roll -= weight;
  }
  return entries[entries.length - 1];
}
