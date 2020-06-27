const readline = require('readline');


const reverse = (str) => {
  const ans = [];
  for (let i = str.length - 1; i >= 0; i -= 1) {
    ans.push(str[i]);
  }
  return ans.join('');
};

function solve(lines) {
  const str = lines[0];
  if (str === reverse(str)) {
    console.log('True');
  } else {
    console.log('False');
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
