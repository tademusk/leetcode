/**
 * @param {number[]} nums 
 * @param {number} firstLen 
 * @param {number} secondLen 
 * @return {number}
 */
var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
    return Math.max(traverse(firstLen,secondLen), traverse(secondLen,firstLen));
    
    function traverse(a, b) {
        let res = 0;
        for (let i = 0; i <= nums.length-a-b; i++) {
            let sum = nums.slice(i,i+a+b).reduce((acc,cur) => acc+cur);
            let l = i+a, r = l+b;
            res = Math.max(res, sum);
            while (r < nums.length) {
                sum = sum-nums[l]+nums[r];
                res = Math.max(res, sum)
                l++, r++;
            }
        }
        return res;
    }
};
