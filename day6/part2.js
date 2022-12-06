import { input } from './input.js';

let start = 13;
let isSearching = true;

const isMarker = (chars) => {
  const unique = new Set(chars.split(''));
  return unique.size === 14;
}
while (isSearching && start + 14 < input.length) {
  start++;
  const sample = input.slice(start - 14, start);
  if (isMarker(sample)) isSearching = false;
}
console.log(start);