import { input } from './input.js';

const fullyContains = (left, right) => {
  const [a, b] = left.split(/-/).map(s => parseInt(s));
  const [x, y] = right.split(/-/).map(d => parseInt(d));
  if (a >= x && b <= y) return true;
  if (x >= a && y <= b) return true;
  return false;
}

const overlap = input.split(/\n/).reduce((prev, current) => {
  const [left, right] = current.split(/,/);
  const overlap = fullyContains(left, right) ? 1 : 0;
  return prev + overlap;
}, 0);

console.log(overlap);