/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    var lessNums=[]
    for (let i = 0; i < nums.length; i++){
        let count = 0
        for (let j = 0; j < nums.length; j++){
            if (j != i && nums[j]<nums[i])
                count++
        }
        lessNums.push(count)
    }
    return lessNums
};
