function reverse(str) {
  let ans = []
  let arr = str.split('')
  for(let i = arr.length; i >= 0; i--){
      ans.push(arr[i])
  }
  return ans.join('')
}

reverse('hello');
