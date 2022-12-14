import { input } from './input.js';
//import { testLarge } from './testData.js';
let register = 1;
let cycle = 0;
const instructions = input.split(/\n/);
const cycleOffsets = [1, 41, 81, 121, 161, 201];
const crt = [];
const expanded = [];

instructions.forEach(line => {
  if (line === 'noop') {
    expanded.push(0);
  } else {
    expanded.push(0);
    expanded.push(parseInt(line.replace(/\w+\s/,'')));
  }
});

/* Helpers to debug offset issue
const showSprite = (register) => {
  const display = Array(40).fill('.', 0);
  for (let offset = -1; offset < 2; offset++) {
    display[register + offset] = '#';
    
  }
  console.log(display.join(''));
}

const showCycle = (register) => {
  const display = Array(40).fill('.', 0);
  display[register] = '@'
  console.log(display.join(''));
}

const display = (register, cycle, line) => {
  console.log('---------------------------\nCycle ', cycle);
  showSprite(register);
  showCycle(cycle);
  console.log('Row', line.join(''));
}
*/

for (let row = 0; row < 6; row++) {
  const cycleOffset = cycleOffsets[row];
  const line = [];
  for (let col = 0; col < 40; col++) {
    cycle++;
    let pixel = '.';
    for (let offset = -1; offset < 2; offset++) {
      if (register + offset === cycle - cycleOffset) pixel = '#';
    }
    line.push(pixel);
    const instruction = expanded[cycle - 1];
    if (instruction) register += instruction;
  }
  crt.push(line.join(''));
}

console.log(crt.join('\n'));
