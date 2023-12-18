/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            if (i === 0) {
                for (let j = 0; j < digits.length; j++) {
                    digits[j] = 0;
                }
                digits = [1].concat(digits);
            }
        } else {
            digits[i] += 1;
            for (let j = i + 1; j < digits.length; j++) {
                digits[j] = 0;
            }
            break;
        }
    }
    return digits;
};


digits = [1,2,3];
console.log(plusOne(digits)) // [1,2,4]

digits = [4,3,2,1];
console.log(plusOne(digits)) // [4,3,2,2]

digits = [9];
console.log(plusOne(digits)) // [1,0]

digits = [8,9,9,9];
console.log(plusOne(digits)) // [9,0,0,0]
