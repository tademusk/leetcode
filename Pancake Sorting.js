/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
    let newArr = [...arr]
    let n = arr.length
    let arrOfK = []
    newArr.sort((a,b) => (b-a))
    newArr.forEach((element ,index) => {
         if(arr.indexOf(element) == 0 && index < n-1) {
            tempinitial = arr.slice(0,n - index)
            tempinitial.reverse()
            arrOfK.push(n-index)
            arr = [...tempinitial,...arr.slice(n-index)]
         }
         
         else if (arr.indexOf(element) < n-index-1 && index < n-1) {
           tempinitial = arr.slice(0,arr.indexOf(element)+1)
           tempinitialReverced = [...tempinitial.reverse()]
           arrOfK.push(arr.indexOf(element)+1)
            arr = [...tempinitialReverced,...arr.slice(arr.indexOf(element)+1)]
            tempfinal = arr.slice(0,n - index)
            tempfinal.reverse()
            arrOfK.push(n-index)
            arr = [...tempfinal,...arr.slice(n-index)]

         }

    });

    return arrOfK
    
};
