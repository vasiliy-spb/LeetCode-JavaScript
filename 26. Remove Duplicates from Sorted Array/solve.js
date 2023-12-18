/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i-1]) {
            nums[index] = nums[i];
            index++;
        }   
    }
    return index;
};

nums = [1,1,2]
console.log(removeDuplicates(nums)) // 2
console.log(nums) // [1,2,_]

nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums)) // 5
console.log(nums) // [0,1,2,3,4,_,_,_,_,_]

nums = [0]
console.log(removeDuplicates(nums)) // 1
console.log(nums) // [0]
