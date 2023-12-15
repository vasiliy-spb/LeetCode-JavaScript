/**
 * @param {number[][]} grid
 * @return {number[][]}
 */

var onesMinusZeros = function(grid) {
    let diff = [];
    const rowMap = new Map();
    const colMap = new Map()
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            const currentEl = grid[row][col];
            if (!rowMap.has(row)) rowMap.set(row, 0);
            if (!colMap.has(col)) colMap.set(col, 0);

            if (currentEl === 1) {
                rowMap.set(row, rowMap.get(row) + 1);
                colMap.set(col, colMap.get(col) + 1);
            } else if (currentEl === 0) {
                rowMap.set(row, rowMap.get(row) - 1);
                colMap.set(col, colMap.get(col) - 1);
            }
        }
    }

    for (let row = 0; row < grid.length; row++) {
        let diffRow = [];
        diff.push(diffRow);
        for (let col = 0; col < grid[row].length; col++) {
            diff[row][col] = rowMap.get(row) + colMap.get(col);
        }       
    }

    return diff;
};

grid = [[0,1,1],[1,0,1],[0,0,1]]
console.log(onesMinusZeros(grid)) // [[0,0,4],[0,0,4],[-2,-2,2]]

grid = [[1,1,1],[1,1,1]]
console.log(onesMinusZeros(grid)) // [[5,5,5],[5,5,5]]
