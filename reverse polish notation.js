/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stuck = []
    let n = tokens.length
    let right;
    let left;
    for(let i = 0 ; i < n; i++){
            if(tokens[i]=="+"){
                stuck.push(Number(stuck.pop()) + Number(stuck.pop()))  
            }
            else if (tokens[i]=="/"){
                 right = stuck.pop()
                 left = stuck.pop()
                 stuck.push((Number(left) / Number(right)) | 0) 
            }
            else if (tokens[i]=="*"){
                 stuck.push(Number(stuck.pop()) * Number(stuck.pop())) 
            }
            else if (tokens[i]=="-"){
                 right = stuck.pop()
                 left = stuck.pop()
                 stuck.push(Number(left) - Number(right)) 
            }
            else {
                 stuck.push(tokens[i])
            }
        }
    return Number(stuck)
    
};
