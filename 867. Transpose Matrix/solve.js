/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let transposeMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            transposeMatrix[j] ??= [];
            transposeMatrix[j].push(matrix[i][j]);
        }
    }
    return transposeMatrix;
};


matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
// matrix = [
//     [1,2,3],
//     [4,5,6]
// ]
let transposeMatrix = transpose(matrix);
console.log(transposeMatrix)