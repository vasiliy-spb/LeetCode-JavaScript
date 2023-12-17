/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const sCharMap = new Map();
    const tCharMap = new Map();
    for (let i = 0; i < s.length; i++) {
        const sChar = s.charAt(i);
        const tChar = t.charAt(i);

        if (sChar !== tChar) {
            if (tCharMap.has(sChar)) {
                tCharMap.set(sChar, tCharMap.get(sChar) - 1);
                if (tCharMap.get(sChar) === 0) {
                    tCharMap.delete(sChar);
                }
            } else {
                if (sCharMap.has(sChar)) {
                    sCharMap.set(sChar, sCharMap.get(sChar) + 1);
                } else {
                    sCharMap.set(sChar, 1);
                }
            }
            if (sCharMap.has(tChar)) {
                sCharMap.set(tChar, sCharMap.get(tChar) - 1);
                if (sCharMap.get(tChar) === 0) {
                    sCharMap.delete(tChar);
                }
            } else {
                if (tCharMap.has(tChar)) {
                    tCharMap.set(tChar, tCharMap.get(tChar) + 1);
                } else {
                    tCharMap.set(tChar, 1);
                }
            }
        }
    }
    return sCharMap.size === 0 && tCharMap.size === 0;
};

// let s = "anagram"; 
// let t = "nagaram";
// console.log(isAnagram(s, t)) // true

let s = "rat"; 
let t = "car";
console.log(isAnagram(s, t)) // false
