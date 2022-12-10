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

const visibleTop = (x, y) => {
  if (y === 0) return true;
  const tree = grid[y][x];
  for (let c = y - 1; c > -1; c--) {
    const comp = grid[c][x];
    if (comp >= tree) return false;
  }
  return true;
}


const visibleLeft = (x, y) => {
  if (x === 0) return true;
  const tree = grid[y][x];
  for (let c = x - 1; c > -1; c--) {
    const comp = grid[y][c];
    if (comp >= tree) return false;
  }
  return true;
}

const visibleRight = (x, y) => {
  if (x + 1 === width) return true;
  const tree = grid[y][x];
  for (let c = x + 1; c < width; c++) {
    const comp = grid[y][c];
    if (comp >= tree) return false;
  }
  return true;
}

const visibleBottom = (x, y) => {
  if (y + 1 === height) return true;
  const tree = grid[y][x];
  for (let c = y + 1; c < height; c++) {
    const comp = grid[c][x]
    if (comp >= tree) return false;
  }
  return true;
}

const check = (x, y) => {
  const directions = [
    visibleTop(x, y),
    visibleRight(x, y),
    visibleBottom(x, y),
    visibleLeft(x, y)
  ]
  return directions.some(v => v);
}

let count = 0;
for (let y = 0; y < height; y++) {
  for(let x = 0; x < width; x++) {
    const result = check(x, y);
    if (result) count++;
    //console.log(x, y, result, count);
  }
}
console.log({ count });
