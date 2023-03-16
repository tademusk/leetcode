/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    if(s.indexOf(']') < 0) return s
    let mystack = []
    let right = s.indexOf(']')
    let middle = right
    while(s[middle] != '[') middle--
    let left = middle-1
    while('0123456789'.indexOf(s[left-1]) >= 0) left--
    let num = eval(s.substring(left ,middle))
    for(let x = 1 ; x <= num ; x++){
        mystack.push(s.substring(middle + 1, right))
    }
    mystack = mystack.join('')
    return decodeString(s.substring(0,left) + mystack + s.substring(right + 1))
    
};
