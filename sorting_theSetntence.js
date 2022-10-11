/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let words = s.split(" ")
    var new_words = []
    for (let i = 0; i<words.length; i++){
        for (let x of words) {
          if (x.slice(x.length-1)==i+1){
              new_words[i]=x.slice(0,x.length-1)
          }  
        }
    } 
    return new_words.join(" ")
};
