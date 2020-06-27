function reverse(str) {
  const ans = [];
  for (let i = str.length; i >= 0; i -= 1) {
    ans.push(str[i]);
  }
  console.log(ans.join(''));
}

reverse('hello');
