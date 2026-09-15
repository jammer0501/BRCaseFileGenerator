export function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
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
