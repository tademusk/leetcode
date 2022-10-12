/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let ln = 0;
    let rn = nums.length-1;
    let new_num = []
    nums.sort((a,b)=> a-b);
    while(ln < rn){
        new_num.push(nums[ln++]);
        new_num.push(nums[rn--]);
    }
    if(ln === rn){
        new_num.push(nums[ln]);
    }
    return new_num;
};
