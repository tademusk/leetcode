/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if(k==0){
            return false;
        }
    let left = 0
    let right = 0
    let set = new Set()
    let n = nums.length;
    while(right < n){
        if(right - left < k){
            if(set.has(nums[right])){
                return true
            }
            else{
                set.add(nums[right])
                right ++
            }
        }
        else{
            if(set.has(nums[right])){
                return true
            }
            else{
               set.add(nums[right])
               set.delete(nums[left])
               right ++
               left ++
            }
        }
    }
    return false
};
