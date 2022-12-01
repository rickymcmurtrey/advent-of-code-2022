import { input } from './input1.js';

const goodies = input.split(/\n\n/);

const elves = goodies.map(g => g.split(/\n/).reduce((prev, current) => prev + parseInt(current), 0));

const sorted = elves.sort((a, b) => b - a);

const top3 = sorted[0] + sorted[1] + sorted[2];

console.log(top3);