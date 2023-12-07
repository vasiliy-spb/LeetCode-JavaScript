/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if (Number(num.charAt(i)) % 2 != 0) {
            return num.slice(0, i + 1);
        }
    }
    return '';
};

// num = "52"
// num = "4206"
num = "35427"
console.log(largestOddNumber(num))

