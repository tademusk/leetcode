/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    if(s.length % 2 == 1){
            return false
        }
    else {
        for(let i=0; i<s.length;i++){
             if((stack[stack.length-1] ==='(' && s[i]===')')||(stack[stack.length-1] ==='{' && s[i]==='}') || (stack[stack.length-1] ==='[' && s[i]===']')) {
              stack.pop();
             }
             else {
                 stack.push(s[i])
             }
        }
    }
    return !stack.length
};
