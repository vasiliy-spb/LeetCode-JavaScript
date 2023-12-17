/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; ) {
        const element = nums[i];
        if (element === val) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    return nums.length;
};

nums = [3,2,2,3];
val = 3
console.log(removeElement(nums, val)) // 2
console.log(nums) // [ 2, 2 ]


nums = [0,1,2,2,3,0,4,2];
val = 2
console.log(removeElement(nums, val)) // 5
console.log(nums) // [ 0, 1, 3, 0, 4 ]

