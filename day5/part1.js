import { input } from './input.js';

const stacks = {};
const moves = [];
const inputParts = input.split(/\n\n/);

inputParts[0].split(/\n/).forEach((line) => {
  for(let i = 0; i < line.length; i += 4) {
    const index = i / 4 + 1;
    const col = line.substring(i, i + 3).replace(/[\[\]]/g, '');
    stacks[index] = stacks[index] || [];
    if (col.match(/[A-Z]/)) stacks[index].unshift(col);
  }
});

inputParts[1].split(/\n/).forEach((line) => {
    const parts = line.split(' ');
    const [amount, from, to] = [parts[1], parts[3], parts[5]].map(p => parseInt(p));
    const log = [];
    for(let i = 0; i < amount; i++) {
      const transfer = stacks[from].pop();
      stacks[to].push(transfer);
    }
});

const keys = Object.keys(stacks).map(k => parseInt(k));
const top = keys.reduce((prev, current) => prev + stacks[current].pop(), '');
console.log(top);