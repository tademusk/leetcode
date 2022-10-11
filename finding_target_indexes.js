/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
//     first we have to sort the array "nums" using selection sort
    
        var target_index=[]
    
        for (let i = 0; i< nums.length ; i++) {
        let j = i-1;
        let temp = nums[i];
        while (j>=0 && nums[j] > temp) {
            nums[j+1] = nums[j]
            j--
        }
        nums[j+1] = temp
    }
  for (let i=0; i<nums.length; i++) {
          if (nums[i] == target) {
              target_index.push(i)
          }
      }
    return target_index
};
