// Fisher-Yates deck shuffle for fair photo selection during the lift cycle.
//
// Source: 01-UI-SPEC.md §"Photo selection" (Fisher-Yates verbatim);
//         01-UI-SPEC.md §"Motion forbidden list" (Math.random() as primary picker forbidden);
//         research/FEATURES.md §6 (Photo Selection Algorithm pseudocode);
//         research/PITFALLS.md UX §"One photo lifts more often than others";
//         REQUIREMENTS.md MOTION-08 (every photo appears once before any repeat).
//
// Plan 06's lift selector will:
//   - On scene init: deck = createDeck(allPolaroidIds)
//   - On each lift: const nextId = deck.shift(); deck.push(nextId)
//   - When the deck cycles past initial size, optionally reshuffle a fresh copy.
//
// Math.random() inside the shuffle is fine — Fisher-Yates is defined in terms of
// uniform random j on [0..i]. The forbidden pattern is Math.random()-as-primary-
// picker (selecting one ID per lift directly from Math.random() with no deck),
// which can repeat the same polaroid and starve obscure ones.

/**
 * In-place Fisher-Yates (Durstenfeld) shuffle.
 * O(n) uniformly random permutation.
 *
 * @template T
 * @param {T[]} arr
 * @returns {T[]} same array, mutated
 */
export function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Build a shuffled NEW array from the input IDs. Does NOT mutate the input.
 * Use for initial deck creation; the in-place `shuffle()` is the building block.
 *
 * @template T
 * @param {T[]} ids
 * @returns {T[]}
 */
export function createDeck(ids) {
  return shuffle(ids.slice());
}
