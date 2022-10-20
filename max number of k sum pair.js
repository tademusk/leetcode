/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maxOperations = function(nums, k) {
  nums.sort((a, b) => a - b)
  let start = 0
  let end = nums.length - 1
  let counter = 0
  
  while (start < end) {
    const sum = nums[start] + nums[end]
    if (sum === k) {
      counter++
      start++
      end--
    } else if (sum < k) {
      start++
    } else {
      end--
    }
  }

  return counter
};
