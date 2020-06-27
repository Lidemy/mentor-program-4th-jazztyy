function join(arr, concatStr) {
  let ans = '';
  for (let i = 0; i < arr.length; i += 1) {
    ans += arr[i];
    if (i < arr.length - 1) {
      ans += concatStr;
    }
  }
  return ans;
}

function repeat(str, times) {
  let ans = str;
  for (let i = 1; i < times; i += 1) {
    ans += str;
  }
  return ans;
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
