/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
   let left = 0
   let right = 0
   let maxAve = -10000
   let n = nums.length
   let total = 0
   while(right < n) {
      if(right - left + 1  < k)  {
          total += nums[right]
          right ++
      } 
      else{
          total += nums[right];
          maxAve= Math.max(maxAve,total/k)
          total -= nums[left];
          left ++
          right ++
      }
   }
   return maxAve
};
