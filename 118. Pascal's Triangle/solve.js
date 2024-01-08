/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let arr = [];
    for (let i = 0; i < numRows; i++) {
        if (i === 0) {
            arr.push([1]);
        } else {
            let currentArr = Array(i + 1);
            for (let j = 0; j < currentArr.length; j++) {
                if (j === 0 || j === currentArr.length - 1) {
                    currentArr[j] = 1;
                } else {
                    currentArr[j] = arr[i - 1][j - 1] + arr[i - 1][j];
                }
            }
            arr.push(currentArr);
        }
    }
    return arr;
};

let numRows = 5;
console.log(generate(numRows)) // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log()

numRows = 1;
console.log(generate(numRows)) // [[1]]
console.log()
