/**
 * @param {string} s
 * @return {number}
 */

// не всегда считает правильно
// var minOperations = function(s) {
//     let indexStart;
//     let indexEnd;
//     let maxNonRepeatingLength = 0;
//     let currentNonRepeatingLength = 0;
//     let previousDigit = s.charAt(0);
//     let countChange = 0;

//     for (let i = 0; i < s.length; i++) {
//         if (!previousDigit) {
//             previousDigit = s.charAt(i);
//             continue;
//         }
//         if (s.charAt(i) === previousDigit) {
//             if (currentNonRepeatingLength >= maxNonRepeatingLength) {
//                 maxNonRepeatingLength = currentNonRepeatingLength;
//                 indexEnd = i - 1;
//                 indexStart = i - currentNonRepeatingLength;
//             }
//             currentNonRepeatingLength = 1;
//         } else {
//             currentNonRepeatingLength++;
//         }
//         previousDigit = s.charAt(i);
//     }
//     if (currentNonRepeatingLength >= maxNonRepeatingLength) {
//         maxNonRepeatingLength = currentNonRepeatingLength;
//         indexEnd = s.length - 1;
//         indexStart = s.length - currentNonRepeatingLength;
//     }
//     console.log()
//     console.log(`maxNonRepeatingLength = ${maxNonRepeatingLength}`)
//     console.log(`indexStart = ${indexStart}, indexEnd = ${indexEnd}`)
//     const start = s.charAt(indexStart);
//     for (let i = indexStart - 1; i >= 0; i--) {
//         if ((indexStart - i) % 2 === 0) {
//             if (s.charAt(i) !== start) countChange++;
//         } else {
//             if (s.charAt(i) === start) countChange++;
//         }
//     }
//     const end = s.charAt(indexEnd);
//     for (let i = indexEnd + 1; i < s.length; i++) {
//         if ((indexEnd + i) % 2 === 0) {
//             if (s.charAt(i) !== end) countChange++;
//         } else {
//             if (s.charAt(i) === end) countChange++;
//         }
//     }
//     return countChange;
// };

var minOperations = function(s) {
    let evenOnesCount = 0;
    let evenZerosCount = 0;
    let oddOnesCount = 0;
    let oddZerosCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            if (s.charAt(i) == 1) {
                evenOnesCount++;
            } else {
                evenZerosCount++;
            }
        } else {
            if (s.charAt(i) == 1) {
                oddOnesCount++;
            } else {
                oddZerosCount++;
            }
        }
    }
    // console.log(`oddOnesCount = ${oddOnesCount}, evenZerosCount = ${evenZerosCount}, oddZerosCount = ${oddZerosCount}, evenOnesCount = ${evenOnesCount}`)

    if (evenOnesCount + oddZerosCount > evenZerosCount + oddOnesCount) {
        return evenZerosCount + oddOnesCount;
    } else {
        return evenOnesCount + oddZerosCount;
    }
};

s = "0100";
console.log(minOperations(s)) // 1

s = "10";
console.log(minOperations(s)) // 0

s = "1111";
console.log(minOperations(s)) // 2

s = "10010100";
console.log(minOperations(s)) // 3

s = "101101111";
console.log(minOperations(s)) // 4

s = "001100011";
console.log(minOperations(s)) // 4
