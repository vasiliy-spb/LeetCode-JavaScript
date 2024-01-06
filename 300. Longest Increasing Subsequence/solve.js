/**
 * @param {number[]} nums
 * @return {number}
 */
// var lengthOfLIS = function(nums) {
//     let subsequenceLength = 1;
//     let last;
//     for (let i = 1; i < nums.length; i++) {
//         if (!last) {
//             if (nums[i - 1] < nums[i]) {
//                 subsequenceLength++;
//                 last = nums[i];
//                 console.log(`${nums[i - 1]} < ${nums[i]}: subsequenceLength = ${subsequenceLength}`)
//             }
//         } else {
//             if (last < nums[i]) {
//                 subsequenceLength++;
//                 console.log(`${last} < ${nums[i]}: subsequenceLength = ${subsequenceLength}`)
//                 last = nums[i];
//             }
//         }

//     }
//     return subsequenceLength;
// };

// var lengthOfLIS = function(nums) {
//     let map = new Map();
//     // map.set(`0-${nums[0]}`, {length: 1, last: nums[0]});
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i - 1] < nums[i]) {
//             for (let obj of map.values()) {
//                 if (obj.last < nums[i]) {
//                     obj.length++;
//                     obj.prev = obj.last;
//                     obj.last = nums[i];
//                 } else {
//                     if (obj.prev < nums[i]) {
//                         obj.last = nums[i];
//                     }
//                 }
//             }
//             map.set(`${i - 1}-${nums[i]}`,{length: 2, prev: nums[i - 1], last: nums[i]});
//         } else {
//             for (let obj of map.values()) {
//                 if (obj.last < nums[i]) {
//                     obj.length++;
//                     obj.prev = obj.last;
//                     obj.last = nums[i];
//                 } else {
//                     if (obj.prev < nums[i]) {
//                         obj.last = nums[i];
//                     }
//                 }
//             }
//         }
//         console.log(map)
//     }
//     let maxSubsequence = 1;
//     for (let obj of map.values()) {
//         if (obj.length > maxSubsequence) {
//             maxSubsequence = obj.length;
//         }
//     }
//     return maxSubsequence;
// };

// var lengthOfLIS = function (nums) {
//     // let dp = [nums.length + 1].fill(0);
//     let n = nums.length;
//     let dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
//     dp[0][0] = 0;

//     let arr = Array(n + 1).fill(0);
//     arr[1] = 1;
//     let preLast;
//     let last;
//     for (let i = 2; i <= n; i++) {
//         if (nums[i - 1] < nums[i]) {
//             // if (!preLast && !last) {
//             preLast = nums[i - 1];
//             last = nums[i];
//             // }
//             // console.log(`nums[i - 1] = ${nums[i - 1]}, nums[i] = ${nums[i]}`);
//             arr[i] = arr[i] + arr[i - 1] + 1;
//         } else {
//             let count = 0;
//             let newLast;
//             let newPreLast;
//             for (let j = i; j > 0; j--) {
//                 if (nums[j] > nums[j - 1]) {
//                     newLast ??= nums[j];
//                     newPreLast ??= nums[j - 1];
//                     count++;
//                 }
//             }
//             if (count > arr[i - 1]) {
//                 arr[i] = count;
//                 last = newLast;
//                 preLast = newPreLast;
//             } else {
//                 arr[i] = arr[i] + arr[i - 1];
//             }


//             // if (nums[i] < last) {
//             //     preLast = last;
//             //     last = nums[i];
//             // }

//         }


//     }
//     return arr[n];
// };


// по статье https://habr.com/ru/articles/343210/
var lengthOfLIS = function (nums) {
    let dp = Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (dp[i] <= dp[j]) {
                    dp[i] = dp[j] + 1;
                }
            }
        }
    }
    let max = 0;
    for (let n of dp) {
        max = Math.max(max, n);
    }
    return max;
};


let nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // 4
console.log()

nums = [0,1,0,3,2,3];
console.log(lengthOfLIS(nums)); // 4
console.log()

nums = [7,7,7,7,7,7,7];
console.log(lengthOfLIS(nums)); // 1
console.log()

nums = [4,10,4,3,8,9];
console.log(lengthOfLIS(nums)); // 3
console.log()

nums = [5, 7, -24, 12, 13, 2, 3, 12, 5, 6, 35];
console.log(lengthOfLIS(nums)); // 6        (34 / 55 testcases passed)
console.log()


// my testcases

nums = [10,9,5,6,1,2,3,4,7,8,9,0];
console.log(lengthOfLIS(nums)); // 7
console.log()

nums = [1,2,10,9,5,2,3,4,7,8,9,0];
console.log(lengthOfLIS(nums)); // 7
console.log()
