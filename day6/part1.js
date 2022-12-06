import { input } from './input.js';

let start = 3;
let isSearching = true;

const isMarker = (chars) => {
  for (let a = 0; a < 4; a++) {
    for (let b = a + 1; b < 4; b++) {
      if (chars.charAt(a) === chars.charAt(b)) return false;
    }
  }
  return true;
}
while (isSearching && start + 4 < input.length) {
  start++;
  const sample = input.slice(start - 4, start);
  if (isMarker(sample)) isSearching = false;
}
console.log(start);