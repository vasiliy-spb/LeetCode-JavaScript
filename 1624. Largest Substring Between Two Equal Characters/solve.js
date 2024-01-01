/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let minSubstringLength = -1;
    let charMap = new Map();
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (charMap.has(ch)) {
            if (i - charMap.get(ch) - 1 > minSubstringLength) {
                minSubstringLength = i - charMap.get(ch) - 1;
            }
        } else {
            charMap.set(ch, i);
        }
    }
    return minSubstringLength;
};

let s = "aa";
console.log(maxLengthBetweenEqualCharacters(s)) // 0

s = "abca";
console.log(maxLengthBetweenEqualCharacters(s)) // 2

s = "cbzxy";
console.log(maxLengthBetweenEqualCharacters(s)) // -1
