/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    if (nums === null || nums.length === 0) {
        return 0;
    }
    let m = new Map(), prefixSum = 0, count = 0;
    // there could be a subarray[0...j] with a sum of k
    m.set(prefixSum, 1);
    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        if (m.has(prefixSum - k)) {
            count += m.get(prefixSum - k);
        }
        m.set(prefixSum, m.get(prefixSum) + 1 || 1);
    }
    return count;
};
