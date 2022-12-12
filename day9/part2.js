import { input } from './input.js';


const rope = [
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 }
];

const s = { x: 0, y: 0 };
const tPositions = new Set();



const display = (rope, start) => {
  const displayKeys = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
  for (let dy = -4; dy < 1; dy++) {
    let line = '';
    for (let dx = 0; dx < 6; dx++) {
      let space = '.';
      if (start.x == dx && start.y == dy) space = 's';
      displayKeys.forEach((k) => {
        const seg = rope[k];
        if (k === 0 && rope[k].x == dx && rope[k].y == dy) {
          space = 'H';
        } else if (rope[k].x == dx && rope[k].y == dy) {
          space = k;
        }
      });
      line += space;
    }
    console.log(line);
  }
  console.log();
}

const storeTailState = (tail) => {
  tPositions.add(`${tail.x}_${tail.y}`);
}

const follow = (rope) => {
  // move to catch up with head
  for (let r = 1; r < rope.length; r++) {
    const head = rope[r - 1];
    const tail = rope[r];

    const xDiff = Math.abs(tail.x - head.x);
    const yDiff = Math.abs(tail.y - head.y);
    const distance = Math.max(xDiff, yDiff);
    if (distance > 1) {
      tail.x += Math.min(Math.max(head.x - tail.x, -1), 1);
      tail.y += Math.min(Math.max(head.y - tail.y, -1), 1);
    }
    
  }
  
  // store state of tail (last body segment)
  storeTailState(rope[9]);
}

const stepHead = (rope, direction, amount) => {
  const head = rope[0];
  if (direction === 'D') {
    head.y++;
  } else if (direction === 'R') {
    head.x++;
  } else if (direction === 'U') {
    head.y--;
  } else if (direction === 'L') {
    head.x--;
  }
  amount--;
  follow(rope);
  //display(rope, s);
  if (amount) stepHead(rope, direction, amount);
}

const testInput = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`;

const instructions = input.split(/\n/);

instructions.forEach(i => {
  const [direction, amount] = i.split(/\s/);
  stepHead(rope, direction, parseInt(amount));
});

console.log(tPositions.size);