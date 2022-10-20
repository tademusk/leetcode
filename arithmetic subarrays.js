/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    const m = l.length
    
    
    let result = new Array(m)
    for (let i = 0; i < m; i++) {
        let outcome
        const low = l[i], high = r[i]
        const gapCount = high - low
        let minVal = Infinity
        let maxVal = -Infinity
        
        const set = new Set()
        for (let j = low; j <= high; j++) {
            const val = nums[j]
            minVal = Math.min(minVal, val)
            maxVal = Math.max(maxVal, val)
            set.add(val)
        }
        
        if (maxVal === minVal) {
        // when same value
            outcome = true
        } else if (set.size < 1 + gapCount) {
        // when some same, some not
            outcome = false
        } else {
            const d = (maxVal - minVal) / gapCount
            if (!Number.isInteger(d)) {
            // when d is not an integer
                outcome = false
            } else {
                outcome = true
                for (let val = minVal; val <= maxVal; val += d) {
                    if (!set.has(val)) {
                    // when a required value is missing
                        outcome = false
                        break
                    }
                }
            }
        }
        
        result[i] = outcome
    }
    
    
    return result
};
