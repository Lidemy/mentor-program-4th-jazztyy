``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 執行第 3 行，設定變數 i 是 0，檢查 i 是否 < arr.length (在此題中為 6)，是，進入第一圈迴圈。
2. 執行第 4 行，判斷 arr[0] (3) 是否 <= 0，否，繼續執行。
3. 