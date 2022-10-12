/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let new_array = nums.map(num=>`${num}`)
    n=nums.length
    for (let i = 0; i<n ; i++)
        {
        for (let j=0; j<n-1-i; j++)
           {
             if(new_array[j] + new_array[j+1] < new_array[j+1] + new_array[j])
                 {
                   [new_array[j],new_array[j+1]] = [new_array[j+1],new_array[j]]
                 }
            }
        }
    let flag=true
    while(flag)
        {
           if(new_array[0]=="0" && new_array[1])
              {
            new_array = new_array.slice(1)
              }  
            else{
                flag=false
            }
        }
   
    return new_array.join("")
};
