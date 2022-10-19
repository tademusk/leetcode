/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if(!nums || nums.length < 2) {
        return 1;
    }
    const result = Array(nums.length).fill(1);
    for(let idx = 1; idx < nums.length; idx++) {
        result[idx] = nums[idx-1] * result[idx-1];
    }
    let subProduct = nums[nums.length - 1];
    for(let idx = nums.length - 2; idx >= 0; idx--) {
        result[idx] = subProduct * result[idx];
        subProduct *= nums[idx];
    }
    return result;
};
