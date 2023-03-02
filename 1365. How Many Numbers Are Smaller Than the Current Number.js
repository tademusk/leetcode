/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let newNums = [...nums]
    newNums.sort((a,b)=>a-b);
    let newArr = []
    let result = []
    for (y of nums){
       result.push(newNums.indexOf(y)) 
    }
    return result
};
