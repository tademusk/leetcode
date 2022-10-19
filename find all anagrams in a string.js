/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if(!s || !p || !s.length || !p.length) {
        return [];
    }
    const result = [];
    const pcount = Array(26).fill(0);
    const scount = Array(26).fill(0);
    const base = 'a'.charCodeAt(0);
    for(let i = 0; i < p.length ; i++) {
        pcount[p.charCodeAt(i) - base]++;
    }
    for(let i = 0; i < s.length ; i++) {
        scount[s.charCodeAt(i) - base]++;
        if(i >= p.length) {
            scount[s.charCodeAt(i - p.length) - base]--;
        }
        
        let arrayEqual = true;
        for(let j = 0; j < 26; j++) {
            if(scount[j] !== pcount[j]) {
                arrayEqual = false;
                break;
            }
        }
        
        if(arrayEqual) {
            result.push(i - p.length + 1);
        }
    }
    return result;
};
