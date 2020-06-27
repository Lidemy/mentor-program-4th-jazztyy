/* eslint-disable no-undef */
const readline = require('readline');


function solve(lines) {
  const num = lines[0];
  for (let i = 1; i <= num; i += 1) {
    const [A, B, methods] = lines[i].split(' ');
    switch (true) {
      case (BigInt(A) === BigInt(B)):
        console.log('DRAW');
        break;
      case ((BigInt(A) > BigInt(B) && methods === '1') || (BigInt(A) < BigInt(B) && methods === '-1')):
        console.log('A');
        break;
      default:
        console.log('B');
        break;
    }
  }
}

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  solve(lines);
});
