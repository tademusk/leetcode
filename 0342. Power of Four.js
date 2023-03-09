/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
   if(n < 1){
       return false
   } 
   else if(n == 1){
       return true
   }
   else {
      return isPowerOfFour(n/4)
   }
};
