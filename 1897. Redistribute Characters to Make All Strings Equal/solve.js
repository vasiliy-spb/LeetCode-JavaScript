/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    let charMap = new Map();
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
            if (!charMap.has(word[j])) {
                charMap.set(word[j], 1);
            } else {
                charMap.set(word[j], charMap.get(word[j]) + 1);
            }
        }
    }
    for (let count of charMap.values()) {
        if (count % words.length != 0) return false;
    }
    return true;
};

let words = ["abc","aabc","bc"];
console.log(makeEqual(words)) // true

words = ["ab","a"];
console.log(makeEqual(words)) // false
