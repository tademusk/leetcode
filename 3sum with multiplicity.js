/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(arr, target) {
    let nmap = new Uint16Array(101), third = target / 3, ans = 0
    for (let i in arr) nmap[arr[i]]++
    for (let k = Math.min(target, 100); k >= third; k--) {
        let rem = target - k, half = rem / 2
        for (let j = Math.min(rem, k); j >= half; j--) {
            let i = rem - j, x = nmap[i], y = nmap[j], z = nmap[k], res
            if (i === k) res = x * (x-1) * (x-2) / 6
            else if (i === j) res = x * (x-1) / 2 * z
            else if (j === k) res = x * y * (y-1) / 2
            else res = x * y * z
            ans = (ans + res) % 1000000007
        }
    }
    return ans
};
