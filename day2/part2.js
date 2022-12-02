import { input } from './input.js';

/* points:
--- Use ---
1 - Rock
2 - Paper
3 - Scissors
--- Result ---
0 - Lost
3 - Draw
6 - Win
*/
/*
Rock - A, X
Paper - B, Y
Scissors - C, Z
*/

const guideLegend = {
  A: 1,
  B: 2,
  C: 3,
  X: 0,
  Y: 3,
  Z: 6
}

const guide = input.split(/\n/);

const getMove = (elf, result) => {
  if (result === 3) return elf; // draw, same as elf
  if (result === 6) {
    // lets win!!!
    if (elf === 1) return 2;
    if (elf === 2) return 3;
    return 1;
  }
  // we've got to throw this one!
  if (elf === 1) return 3;
  if (elf === 2) return 1;
  return 2;
}

const score = (entry) => {
  const [elf, result] = entry.split(' ').map(e => guideLegend[e]);
  const movePoints = getMove(elf, result); // returns 1,2,3
  return movePoints + result;
}
const total = guide.reduce((prev, curr) => prev + score(curr), 0);
console.log(total);