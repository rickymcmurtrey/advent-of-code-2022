import { input } from './input.js';
const t = { x: 0, y: 0 };
const h = { x: 0, y: 0 };
const s = { x: 0, y: 0 };
const tPositions = new Set();

const display = (head, tail, start) => {
  
  for (let dy = -5; dy < 1; dy++) {
    let line = '';
    for (let dx = 0; dx < 6; dx++) {
      let space = '.';
      if (start.x == dx && start.y == dy) space = 's';
      if (tail.x == dx && tail.y == dy) space = 'T';
      if (head.x == dx && head.y == dy) space = 'H';
      line += space;
    }
    console.log(line);
  }
  console.log();
}

const storeTailState = (tail) => {
  tPositions.add(`${tail.x}_${tail.y}`);
}

const follow = (head, tail) => {
  // move to catch up with head
  const xDiff = Math.abs(tail.x - head.x);
  const yDiff = Math.abs(tail.y - head.y);
  const distance = Math.max(xDiff, yDiff);
  if (distance > 1) {
    tail.x += Math.min(Math.max(head.x - tail.x, -1), 1);
    tail.y += Math.min(Math.max(head.y - tail.y, -1), 1);
  }
 
  // store state
  storeTailState(tail);
}

const stepHead = (head, tail, direction, amount) => {
  
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
  follow(head, tail);
  //display(h, t, s);
  
  if (amount) stepHead(head, tail, direction, amount);
}

const instructions = input.split(/\n/);

instructions.forEach(i => {
  //console.log('===', i, '===');
  const [direction, amount] = i.split(/\s/);
  stepHead(h, t, direction, parseInt(amount));
});

console.log(tPositions.size);