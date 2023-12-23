/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let onesCount = 0;
    for (let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        if (ch == 1) onesCount++;
    }

    let scoreLeft = 0;
    let scoreRight = onesCount;
    let maxScore = 0;
    for (let i = 0; i < s.length - 1; i++) {
        let ch = s.charAt(i);
        if (ch == 1) {
            scoreRight--;
        }
        if (ch == 0) {
            scoreLeft++;
        }
        if (scoreLeft + scoreRight > maxScore) {
            maxScore = scoreLeft + scoreRight;
        }
    }
    return maxScore;
};

s = "011101"
console.log(maxScore(s)) // 5

s = "00111"
console.log(maxScore(s)) // 5

s = "1111"
console.log(maxScore(s)) // 3

s = "00"
console.log(maxScore(s)) // 1
