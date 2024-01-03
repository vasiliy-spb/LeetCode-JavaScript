/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!numMap.has(i)) {
            numMap.set(i, new Set());
        }
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] !== 0 && !numMap.get(i).has(nums[j])) {
                numMap.get(i).add(nums[j]);
                nums[j] = 0;
            }
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (numMap.get(i).size > 0) {
            nums[i] = Array.from(numMap.get(i));
        } else {
            nums = nums.slice(0, i);
            break;
        }
    }
    return nums;
};

let nums = [1,3,4,1,2,3,1];
console.log(findMatrix(nums)); // [[1,3,4,2],[1,3],[1]]
console.log()

nums = [1,2,3,4];
console.log(findMatrix(nums)); // [[4,3,2,1]]
