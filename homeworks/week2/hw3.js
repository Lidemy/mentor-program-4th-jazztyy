function reverse(str) {
  let ans = []
  for(let i = str.length; i >= 0; i--){
      ans.push(str[i])
  }
  return ans.join('')
}

reverse('hello');
