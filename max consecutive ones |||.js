
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0;
    let zeroesCount = 0;
    let ans = 0;
    let right = 0;
    for(right =0; right< nums.length; right++){
        if(nums[right]===0){
            zeroesCount++;
        }

        if(zeroesCount>k){
           ans = Math.max(ans, right-left);
            while(nums[left]!=0){
                left++;
            }
            left = left+1;
            zeroesCount--;
        }
        
    }
    return Math.max(ans, right-left);
};
