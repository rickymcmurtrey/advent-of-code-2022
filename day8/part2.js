import { input } from './input.js';
const testData = `30373
25512
65332
33549
35390`;

const lines = input.split(/\n/);
const grid = lines.map(l => l.split(''));
const height = lines.length;
const width = lines[0].length;
console.log(grid);

const scoreTop = (x, y) => {
  let score = 0;
  if (y === 0) return score;
  const tree = grid[y][x];
  for (let c = y - 1; c > -1; c--) {
    const comp = grid[c][x];
    if (comp < tree) {
      score++;
    } else {
      score++;
      return score;
    }
  }
  return score;
}


const scoreLeft = (x, y) => {
  let score = 0;
  if (x === 0) return score;
  const tree = grid[y][x];
  for (let c = x - 1; c > -1; c--) {
    const comp = grid[y][c];
    if (comp < tree) {
      score++;
    } else {
      score++;
      return score;
    }
  }
  return score;
}

const scoreRight = (x, y) => {
  let score = 0;
  if (x + 1 === width) return score;
  const tree = grid[y][x];
  for (let c = x + 1; c < width; c++) {
    const comp = grid[y][c];
    if (comp < tree) {
      score++;
    } else {
      score++;
      return score;
    }
  }
  return score;
}

const scoreBottom = (x, y) => {
  let score = 0;
  if (y + 1 === height) return score;
  const tree = grid[y][x];
  for (let c = y + 1; c < height; c++) {
    const comp = grid[c][x]
    if (comp < tree) { 
      score++;
    } else {
      score++;
      return score;
    }
  }
  return score;
}

const score = (x, y) => {
  const directions = [
    scoreTop(x, y),
    scoreRight(x, y),
    scoreBottom(x, y),
    scoreLeft(x, y)
  ]
  //console.log({ x, y, directions });
  return directions.reduce((prev, curr) => prev * curr);
}

let highScore = 0;
for (let y = 0; y < height; y++) {
  for(let x = 0; x < width; x++) {
    const result = score(x, y);
    if (result > highScore) highScore = result;
    //console.log(x, y, result, count);
  }
}
//console.log(2, 4, score(2, 4));
console.log({ highScore });
