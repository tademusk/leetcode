/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    let result = []
    let keyMap = {}
    const changedLen = changed.length
    if(changedLen%2===1) return result
    changed.sort((a,b)=>a - b)

    for(var i = 0; i < changedLen; i++) {
        keyMap[changed[i]] = (keyMap[changed[i]] || 0) + 1
    }
    var j = 0
    while(result.length < (changedLen / 2)) {
        if(changed[j] === 0 && keyMap[0]) {
            if(keyMap[0] >= 2) {
                keyMap[changed[j]]--
                keyMap[2 * changed[j]]--
                result.push(changed[j])                
            } else {
                return []
            }
        }
        else if(keyMap[changed[j]] && !keyMap[2 * changed[j]] ) {
            return []
        } else if(keyMap[changed[j]]) {
            keyMap[changed[j]]--
            keyMap[2 * changed[j]]--
            result.push(changed[j])
        }
        j++
    }
    
    return result
};
