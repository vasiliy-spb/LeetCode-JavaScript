/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
    let max;
    let preMax;
    let min;
    let postMin;
    nums.forEach(num => {
        if (min && max && (!postMin || !preMax)) {
            preMax ??= num;
            postMin ??= num;
        }
        if (!min && !max) {
            max ??= num;
            min ??= num;
            return;
        }

        if (num === max) {
            preMax = num;
        } else if (num > max) {
            preMax = max;
            max = num;
        } else if (num > preMax) {
            preMax = num;
        }

        if (num === min) {
            postMin = num;
        } else if (num < min) {
            postMin = min;
            min = num;
        } else if (num < postMin) {
            postMin = num;
        }
    })
    return max * preMax - min * postMin;
};


let nums = [5, 6, 2, 7, 4];
console.log(maxProductDifference(nums)) // 34

nums = [4,2,5,9,7,4,8];
console.log(maxProductDifference(nums)) // 64

nums = [1,6,7,5,2,4,10,6,4];
console.log(maxProductDifference(nums)) // 68

nums = [8, 3, 5, 7];
console.log(maxProductDifference(nums)) // 41

