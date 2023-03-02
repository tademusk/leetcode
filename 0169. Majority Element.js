/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let appear = new Map()
    for(x of nums){
        if(appear.has(x)){
            appear.set(x,appear.get(x)+1)
        }
        else{
            appear.set(x,1)
        }
    }
    let key = appear.keys();
    for(y of key){
        if (appear.get(y) > Math.floor(nums.length/2)) {
            return y
        }
    }
};
