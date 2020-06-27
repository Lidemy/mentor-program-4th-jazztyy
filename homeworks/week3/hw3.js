const readline = require('readline');


const Prime = (num) => {
  if (num === 1) return false;
  const number = Math.sqrt(num);
  for (let i = 2; i <= number; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

function solve(lines) {
  for (let i = 1; i < lines.length; i += 1) {
    if (Prime(Number(lines[i]))) {
      console.log('Prime');
    } else {
      console.log('Composite');
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
