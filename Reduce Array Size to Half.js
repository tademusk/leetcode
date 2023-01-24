/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
  // let's sort the comming array first
    arr.sort((a,b)=>a-b)
    // variables
    let count = 1;
    let resultArr = []
    let tempValue = arr[0]
    const m = arr.length
    const n = m/2
    
    //then let's iterate over the array and do what ever we wanna do
    for (let x = 1; x < m; x++)
    {
       if(tempValue == arr[x]){
         count++
       }
       else {
          resultArr.push(count)
          tempValue = arr[x]
          count = 1
       }
    }
    resultArr.push(count)

    resultArr.sort((a,b)=>b-a)
    const v = resultArr.length
    let sum = 0
    let counter = 0
   for (let i = 0; i < v; i++) {
      if(sum < n) {
         sum += resultArr[i]
         counter++
      }
      else {
         break
      }
   }

   return counter
};
