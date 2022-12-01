import { input } from './input1.js';

const goodies = input.split(/\n\n/);

const elves = goodies.map(g => g.split(/\n/).reduce((prev, current) => prev + parseInt(current), 0));

const highest = elves.reduce((prev, current) => current > prev ? current : prev, 0);

console.log(highest);