/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a,b)=>b-a)
    const m = nums.length
    const n = m/2
    let pairSumArr = []
    for (let i=0; i<n; i++) {
       pairSumArr.push(nums[i] + nums[m-i-1])
    }
    pairSumArr.sort((a,b)=>b-a)
    return pairSumArr[0]
};
