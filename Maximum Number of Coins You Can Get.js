/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    piles.sort((a,b)=> b-a)
    
    const sliced = piles.slice(0,piles.length * 2 / 3)

    const filteredArray = sliced.filter((value,index)=>{
         return index % 2 == 1
    })

    const result = filteredArray.reduce((a,b)=> {
        return a+b
    },0)
    
    return result
    
};
