/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!numMap.has(nums[i])) {
            numMap.set(nums[i], 1);
        } else {
            numMap.set(nums[i], numMap.get(nums[i]) + 1);
        }
    }
    let countOperations = 0;
    for (let count of numMap.values()) {
        if (count === 1) return -1;
        while (count > 0) {
            if (count % 3 === 0) {
                countOperations += count / 3;
                count = 0;
            } else {
                count -= 2;
                countOperations++;
            }
        }
    }
    return countOperations;
};

let nums = [2,3,3,2,2,4,2,3,4];
console.log(minOperations(nums)); // 4
console.log();

nums = [2,1,2,2,3,3];
console.log(minOperations(nums)); // -1
console.log();
