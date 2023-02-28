// 1413. Minimum Value to Get Positive Step by Step Sum

/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let prefixarray = [];
    prefixarray.push(nums[0])
    let n = nums.length;
    
    for (x = 1; x < n; x++) {
        prefixarray.push(prefixarray[x-1]+nums[x])
    }
    prefixarray.sort((a,b)=>a-b)
    let z = 1-prefixarray[0]
    if (z < 1) return 1
    else return z
};
