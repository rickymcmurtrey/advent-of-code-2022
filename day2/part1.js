import { input } from './input.js';

const moveMap = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3
}

const guide = input.split(/\n/);

const rps = (me, elf) => {
  if (me === elf) return 3; // draw
  if (me === 1) {
    if (elf !== 2) return 6; // win
  } else if (me === 2) {
    if (elf !== 3) return 6; // win
    
  } else {
    if (elf !== 1) return 6; // win
  }
  return 0; // lose
}

const score = (entry) => {
  const [elf, me] = entry.split(' ').map(e => moveMap[e]);
  const movePoints = me;
  let points = me;

  const successPoints = rps(me, elf);

  return movePoints + successPoints;
}
const total = guide.reduce((prev, curr) => prev + score(curr), 0);
console.log(total);