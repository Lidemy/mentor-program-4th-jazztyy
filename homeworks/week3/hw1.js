const readline = require('readline');

function solve(lines) {
  for (let i = 1; i <= lines[0]; i += 1) {
    const str = [];
    for (let n = 1; n <= i; n += 1) {
      str.push('*');
    }
    console.log(str.join(''));
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
