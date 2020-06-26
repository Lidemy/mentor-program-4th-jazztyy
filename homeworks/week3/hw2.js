const readline = require('readline');

function solve(lines) {
  const arr = lines[0].split(' ');
  for (let i = Number(arr[0]); i <= arr[1]; i += 1) {
    const str = i.toString();
    if (i < 10) {
      if ((i ** 1) === i) {
        console.log(i);
      }
    } else if (i < 100) {
      if ((str[0] ** 2) + (str[1] ** 2) === i) {
        console.log(i);
      }
    } else if (i < 1000) {
      if ((str[0] ** 3) + (str[1] ** 3) + (str[2] ** 3) === i) {
        console.log(i);
      }
    } else if (i < 10000) {
      if ((str[0] ** 4) + (str[1] ** 4)
        + (str[2] ** 4) + (str[3] ** 4) === i) {
        console.log(i);
      }
    } else if (i < 100000) {
      if ((str[0] ** 5) + (str[1] ** 5)
        + (str[2] ** 5) + (str[3] ** 5) + (str[4] ** 5) === i) {
        console.log(i);
      }
    } else if (i < 1000000) {
      if ((str[0] ** 6) + (str[1] ** 6)
        + (str[2] ** 6) + (str[3] ** 6)
        + (str[4] ** 6) + (str[5] ** 6) === i) {
        console.log(i);
      }
    } else {
      return;
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
