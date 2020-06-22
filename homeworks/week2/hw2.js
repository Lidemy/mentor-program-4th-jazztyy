function capitalize(str) {
    let ans = []
    let firstWord = str[0]
    if (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122) {
        firstWord = String.fromCharCode(str.charCodeAt(0) - 32)
        ans.push(firstWord)
    }
    for(i = 1; i < str.length; i++){
        ans.push(str[i])
    }
    return ans.join('')
}

console.log(capitalize('hello'));
