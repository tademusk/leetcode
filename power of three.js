/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
     if(n<=3){
        if(n===3)
            return true
        else if(n===1)
            return true
         else
            return false
     }
     else {
        return isPowerOfThree(n/3) 
     }
};
