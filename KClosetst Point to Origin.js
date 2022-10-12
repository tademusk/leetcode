/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    var result_array=[]
    for(let i = 0; i < points.length; i++){
        for (let j=0; j < points.length-1-i; j++){
            if(Math.pow(points[j][0],2)+Math.pow(points[j][1],2) > Math.pow(points[j+1][0],2)+Math.pow(points[j+1][1],2)){
                [points[j],points[j+1]]=[points[j+1],points[j]]
            }
        }
    }
    for (let t=0; t<k; t++){
        result_array.push(points[t])
    }
    return result_array
};
