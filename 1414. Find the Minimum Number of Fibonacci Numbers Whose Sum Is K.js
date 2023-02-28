/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function(k) {
    let fibonachiarray = [1,1];
    let x = 1;
    while(fibonachiarray[x] < k){
        fibonachiarray.push(fibonachiarray[x] + fibonachiarray[x-1]);
        x++;
    }
    let m = fibonachiarray.length-1;
    let num = 0;
    while(k > 0){
        if(k >= fibonachiarray[m]){
            k = k - fibonachiarray[m];
            num++
        }
        if(k < fibonachiarray[m]){
            m--
        }

    }
    return num;    
};
