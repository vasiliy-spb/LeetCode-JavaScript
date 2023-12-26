/**
 * @param {string} s
 * @return {number}
 */

// var numDecodings = function (s) {
//     let wayCount = 0;
//     let addOne = false;
//     for (let i = 0; i < s.length; i++) {
//         const digit = s.charAt(i);
//         if (digit == 0 && i === 0) {
//             // if (i === 0 || (i + 1 < s.length && s.charAt(i + 1))) {
//                 return 0;
//             // }
//         }
//         // console.log(`digit = ${digit}`)
//         if (i + 1 < s.length) {
//             const nextDigit = s.charAt(i + 1);
//             const num = Number(digit + nextDigit);
//             if (num >= 11 && num <= 26) {
//                 // console.log(`num = ${num}, hasVariant`)
//                 wayCount += 2;
//                 i++;
//             }
//         } else {
//             if (digit == 0 && s.charAt(i - 1) > 2) return 0;
//             if (!addOne) {
//                 wayCount++;
//                 addOne = true;
//             }
//         }
//     }
//     return wayCount;
// };


// var numDecodings = function(s) {
//     // if (s.charAt(0) == 0) return 0;

//     let wayCount = 1;
//     let hasOne = false;
//     for (let i = 1; i < s.length; i++) {
//         const digit = s.charAt(i);
//         const previousDigit = s.charAt(i - 1);
//         const num = Number(previousDigit + digit);
//         console.log()
//         console.log(`num = ${num}`)
//         if (num >= 11 && num <= 26) {
//             if (wayCount === 1) wayCount = 2;
//             else wayCount += 2;
//             // i++;
//         } else {
//             if (previousDigit == 0 ) {
//                 return 0;
//             }
//             hasOne = true;
//         }
//     }
//     if (hasOne) {
//         wayCount++;
//     }
//     // console.log()
//     return wayCount;

// };

// var numDecodings = function(s) {
//     let wayCount = 0;
//     let isStart = false;
//     let add = 0;
//     // 1130312
//     for (let i = 1; i < s.length; i++) {
//         const prevDigit = s.charAt(i - 1);
//         const digit = s.charAt(i);
//         if (!isStart) {
//             let num = Number(prevDigit + digit);
//             if (num >= 11 && num <= 26) {
//                 wayCount += 2;
//             } else if (num < 10) {
//                 return 0;
//             }
//             // i++;
//             isStart = true;
//         } else {
//             add = add === 0 ? 1 : add;
//             if (Number(digit) === 0) {
//                 return 0;
//             } else if (Number(digit) < 3) {
//                 isStart = false;
//             }
//         }
//     }
//     wayCount += add;
//     return wayCount;
// };

//$ ————————————————————-
// var numDecodings = function(s) {
//     // console.log();
//     s = s.replace(/10/g, "J");
//     s = s.replace(/20/g, "T")

//     let wayCount = 0;
//     let lastIndex = 0;
//     let add = 0;
//     let hasOne = false;

//     for (let i = 0; i < s.length - 1; i++) {
//         const digit = s.charAt(i);
//         if (digit === "J" || digit === "T") continue;
//         if (digit > 2) {
//             hasOne = true;
//             continue;
//         }
//         if (digit == 0) return 0;
//         const nextDigit = s.charAt(i + 1);
//         if (nextDigit === "J" || nextDigit === "T") {
//             // add = add === 0 ? 1 : add;
//             hasOne = true;
//             continue;
//         }

//         let num = Number(digit + nextDigit);
//         if (num >= 11 && num <= 26) {
//             i++;
//             lastIndex = i;
//             wayCount += 2;
//         } else {
//             // add = add === 0 ? 1 : add;
//             hasOne = true;
//             lastIndex = i;
//         }
//         // console.log(`num = ${num}`)
//     }
//     if (lastIndex < s.length - 1) {
//         // console.log(`lastIndex = ${lastIndex}, s.length = ${s.length}`)
//         // add = add === 0 ? 1 : add;
//         hasOne = true;
//     }
//     if (hasOne)
//         wayCount += 1;
//     return wayCount;
// }

// var numDecodings = function(s) {
//     s = s.replace(/10/g, "O")
//     s = s.replace(/20/g, "O")
//     s = s.replace(/26/g, "J")
//     s = s.replace(/25/g, "J")
//     s = s.replace(/24/g, "J")
//     s = s.replace(/23/g, "J")
//     s = s.replace(/22/g, "J")
//     s = s.replace(/21/g, "J")
//     s = s.replace(/19/g, "J")
//     s = s.replace(/18/g, "J")
//     s = s.replace(/17/g, "J")
//     s = s.replace(/16/g, "J")
//     s = s.replace(/15/g, "J")
//     s = s.replace(/14/g, "J")
//     s = s.replace(/13/g, "J")
//     s = s.replace(/12/g, "J")
//     s = s.replace(/11/g, "J")

//     let wayCount = 0;
//     let hasOneWay = false;
//     let onlyPair = true;

//     for (let i = 0; i < s.length; i++) {
//         const digit = s.charAt(i);
//         if (Number(digit) === 0) return 0;
//         if (digit === "J") {
//             wayCount += 2;
//         } else if (digit === "O") {
//             hasOneWay = true;
//         } else {
//             hasOneWay = true;
//             onlyPair = false;
//         }
//     }
//     if (hasOneWay && wayCount === 0) wayCount++;
//     return wayCount;
// };


// var numDecodings = function(s) {
//     let digites = [];
//     let indexes = [];

//     let hasOne = false;

//     for (let i = 0; i < s.length; i++) {
//         const dig = s.charAt(i);
//         digites.push(dig);
//         if (Number(dig) !== 0) {
//             indexes.push(1);
//         } else {
//             indexes.push(0);
//         }
//     }
//     for (let i = 1; i < s.length; i++) {
//         const prevDig = s.charAt(i - 1);
//         const dig = s.charAt(i);

//         let num = Number(prevDig + dig);
//         if (num >= 10 && num <= 26) {
//             indexes[i - 1] += 1;
//             indexes[i] += 1;
//         }
//     }

//     // console.log(indexes)

//     for (let i = 0; i < s.length; i++) {
//         const dig = s.charAt(i);
//         if (dig == "0") {
//             if (indexes[i] === 0) {
//                 return 0;
//             } else {
//                 indexes[i] = 0;
//                 indexes[i - 1] = 0;
//                 hasOne = true;
//             }

//         }
//     }

//     let wayCount = 0;
//     let countThree = 0;
//     let countTwo = 0;
//     let hasThree = false;
//     for (let i = 1; i < indexes.length - 1; i++) {
//         if (indexes[i] === 3) {
//             // wayCount += 3;
//             // console.log("countThree++")
//             countThree++;
//             if (indexes[i - 1] !== 3) {
//                 indexes[i - 1] = 0;
//             } else {
//                 indexes[i - 1]--;
//             }
//             indexes[i] = 0;
//             if (indexes[i + 1] !== 3) {
//                 indexes[i + 1] = 0;
//             } else {
//                 indexes[i + 1]--;
//             }
//             hasThree = true;
//         }
//     }

//     // console.log(indexes)

//     let hasTwo = false;
//     for (let i = 1; i < indexes.length; i++) {
//         if (indexes[i] === 2 && indexes[i - 1] === 2) {
//             // wayCount += 2;
//             countTwo++;
//             indexes[i - 1] = 0;
//             indexes[i] = 0;
//             hasTwo = true;
//         }
//     }

//     // console.log(indexes)
    
//     for (let i = 0; i < indexes.length; i++) {
//         if (indexes[i] === 1) {
//             // console.log(`hasOne`)
//             hasOne = true;
//             break;
//         }
//     }

//     // console.log(indexes)

//     if (!hasThree && !hasTwo && hasOne) {
//         wayCount++;
//     }

//     if (countThree !== 0) {
//         wayCount += 3 ** countThree;
//     }
//     if (countTwo !== 0) {
//         wayCount += 2 ** countTwo;
//     }

//     return wayCount;
// };


// from GPT
// var numDecodings = function(s) {
//     const n = s.length;
//     if (n === 0 || s[0] === '0') {
//         return 0;
//     }

//     let dp = new Array(n + 1).fill(0);
//     dp[0] = 1;
//     dp[1] = 1;

//     for (let i = 2; i <= n; i++) {
//         let oneDigit = parseInt(s[i - 1]);
//         let twoDigits = parseInt(s.substring(i - 2, i));

//         if (oneDigit >= 1) {
//             dp[i] += dp[i - 1];
//         }

//         if (twoDigits >= 10 && twoDigits <= 26) {
//             dp[i] += dp[i - 2];
//         }
//     }


//     return dp[n];
// };



// var numDecodings = function(s) {
//     const n = s.length;
//     if (n === 0 || s[0] === '0') {
//         return 0;
//     }

//     let dp = new Array(n + 1).fill(0);
//     dp[0] = 1;
//     dp[1] = 1;

//     for (let i = 2; i <= n; i++) {
//         if (s[i - 1] !== '0') {
//             dp[i] += dp[i - 1];
//         }

//         let twoDigits = parseInt(s.substring(i - 2, i));
//         if (twoDigits >= 10 && twoDigits <= 26) {
//             dp[i] += dp[i - 2];
//         }
//     }

//     return dp[n];
// };


var numDecodings = function(s) {
    let n = s.length;
    if (n === 0 || s.charAt(0) == 0) return 0;

    let wayCountArray = new Array(n + 1).fill(0);
    wayCountArray[0] = 1;
    wayCountArray[1] = 1;

    for (let i = 2; i <= n; i++) {
        const oneDigit = Number(s[i - 1]);
        const twoDigits = Number(s[i - 2] + s[i - 1]);

        if (oneDigit >= 1) {
            wayCountArray[i] += wayCountArray[i - 1];
        }

        if (twoDigits >= 10 && twoDigits <= 26) {
            wayCountArray[i] += wayCountArray[i - 2];
        }
    }
    return wayCountArray[n];
};



let s = "12"
console.log(numDecodings(s)) // 2

s = "226"
console.log(numDecodings(s)) // 3

s = "06"
console.log(numDecodings(s)) // 0

s = "2101"
console.log(numDecodings(s)) // 1

s = "123123"
console.log(numDecodings(s)) // 9

s = "1123" // 241 / 269 testcases passed
console.log(numDecodings(s)) // 5

s = "111111111111111111111111111111111111111111111" // 243 / 269 testcases passed
console.log(numDecodings(s)) // 1836311903

// s = "111111" // 243 / 269 testcases passed
// console.log(numDecodings(s)) // 1836311903




// s = "1012"
// console.log(numDecodings(s)) // 2

// s = "1112"
// console.log(numDecodings(s)) // 4

// s = "1130312"
// console.log(numDecodings(s)) // 0

// s = "110312"
// console.log(numDecodings(s)) // 2

// s = "190312"
// console.log(numDecodings(s)) // 0

// s = "190212"
// console.log(numDecodings(s)) // 0

// var numDecodings = function(s) {
//     let wayCount = 0;
//     let hasOneWay = false;

//     for (let i = 0; i < s.length; i++) {
//         const digit = s.charAt(i);
//         if (i > 0 && i < s.length - 1) {
//             const prevDigit = s.charAt(i - 1);
//             const nextDigit = s.charAt(i + 1);
//             const numTwo = Number(prevDigit + digit);
//             const numTthree = Number(prevDigit + digit + nextDigit);
//             // if (num >= 11 && num <= 26) {
//             //     if (nextDigit == 0) {

//             //     } else {
//             //         wayCount += 2;
//             //     i++;
//             //     }
//             // }

//             if (numTthree % 10 === 0) {
//                 hasOneWay = true;

//                 if (i + 3 < s.length) {
//                     i += 2;
//                 } else {
//                     i++;
//                 }

//             }

//         }
        
//     }
// };



// 4 3 1 2 3 1 2 5 6


// let p = "33163310333103444204442055235";
// p = p.replace(/10/g, "J")
// p = p.replace(/11/g, "J")
// p = p.replace(/12/g, "J")
// p = p.replace(/13/g, "J")
// p = p.replace(/14/g, "J")
// p = p.replace(/15/g, "J")
// p = p.replace(/16/g, "J")
// p = p.replace(/17/g, "J")
// p = p.replace(/18/g, "J")
// p = p.replace(/19/g, "J")
// p = p.replace(/20/g, "J")
// p = p.replace(/21/g, "J")
// p = p.replace(/22/g, "J")
// p = p.replace(/23/g, "J")
// p = p.replace(/24/g, "J")
// p = p.replace(/25/g, "J")
// p = p.replace(/26/g, "J")
// console.log(p)



/*

..10...
..20..


*/