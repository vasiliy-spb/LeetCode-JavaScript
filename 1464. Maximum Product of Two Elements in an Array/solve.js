/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    nums = nums.sort((a, b) => a - b);
    return (nums[nums.length - 1] - 1) * (nums[nums.length - 2] - 1);
};

nums = [3,4,5,2]
console.log(maxProduct(nums));