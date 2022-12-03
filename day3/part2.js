import { input } from './input.js';

const priority = (item) => {
  const code = item.charCodeAt(0);
  return code > 97 ? code - 96 : code - 38;
}

const common = (a, b, c) => {
  console.log({ a, b, c});
  const left = new Set(a.split(''));
  const middle = new Set(b.split(''));
  const right = new Set(c.split(''));
  for (const item of left) {
    if (middle.has(item) && right.has(item)) return item;
  }
}

let prioritiesSum = 0
const lines = input.split(/\n/);
for (let i = 0; i < lines.length - 2; i += 3) {
  
  const badge = common(lines[i], lines[i+1], lines[i+2]);
  prioritiesSum += priority(badge);
  console.log(lines[i], lines[i+1], lines[i+2]);
}
console.log(prioritiesSum);