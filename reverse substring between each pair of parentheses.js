/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
   let myStack=[]
   let n = s.length
   for(let i = 0; i<n ; i++){
      if(s[i]!==')'){
          myStack.push(s[i])
      }
      else{
          let temp = [];
          while(myStack[myStack.length -1]!=='('){
                temp.push(myStack.pop());
            }
          myStack.pop()
          myStack.push(...temp)
      }
   }
    return myStack.join('')
};
