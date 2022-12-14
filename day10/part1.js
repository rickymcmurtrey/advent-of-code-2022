import { input } from './input.js';

let register = 1;
let cycles = 0;
let lines = input.split(/\n/);
const interestingCycles = [20, 60, 100, 140, 180, 220];
let strength = 0;
let expanded = [];
lines.forEach(line => {
  if (line === 'noop') {
    expanded.push(0);
  } else {
    expanded.push(0);
    expanded.push(parseInt(line.replace(/\w+\s/,'')));
  }
});

while (cycles < expanded.length + 1) {
  cycles++;
  if (interestingCycles.includes(cycles)) strength += cycles * register;
  const instruction = expanded[cycles - 1];
  if (instruction) register += instruction;
}

console.log({ strength });