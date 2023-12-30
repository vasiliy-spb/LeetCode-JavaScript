/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//     let memo = new Map();
//     memo.set(0, 1);
//     memo.set(1, 1);

//     let fn = function(x) {
//         let res;
//         if (memo.has(x)) {
//             res = memo.get(x);
//         } else {
//             res = climbStairs(x - 1) + climbStairs(x - 2);
//             memo.set(x, res);
//         }
//         return res;
//     }
    
//     return fn(n);
// };

// var climbStairs = function(n) {
//     let dp = Array(n + 1);

//     dp[1] = 1;
//     dp[2] = 2;

//     for (let i = 3; i <= n; i++) {
//         dp[i] = dp[i - 1] + dp[i - 2];
//     }

//     return dp[n];
// };

var climbStairs = function(n) {

    if (n <= 2) return n;
    let res;

    let first = 1;
    let second = 2;

    for (let i = 3; i <= n; i++) {
        res = first + second;
        if (i == n) return res;
        first = second;
        second = res;
    }
};


let n = 2;
console.log(climbStairs(n)) // 2

n = 3;
console.log(climbStairs(n)) // 3

n = 10;
console.log(climbStairs(n)) // 

n = 38;
console.log(climbStairs(n)) // 63245986
