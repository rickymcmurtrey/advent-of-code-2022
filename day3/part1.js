import { input } from './input.js';

const priority = (item) => {
  const code = item.charCodeAt(0);
  return code > 97 ? code - 96 : code - 38;
}

const common = (rucksack) => {
  const data = rucksack.split('');
  const left = new Set(data.splice(0, rucksack.length/2));
  const right = new Set(data);
  for (const item of left) {
    if (right.has(item)) return item;
  }
}

const prioritiesSum = input.split(/\n/).reduce((prev, curr) => prev + priority(common(curr)), 0);

console.log(prioritiesSum);