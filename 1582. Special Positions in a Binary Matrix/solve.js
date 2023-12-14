/**
 * @param {number[][]} mat
 * @return {number}
 */

// with optimization
var numSpecial = function(mat) {
    const columnMap = new Map();
    const rowMap = new Map();
    let countSpecialPosition = 0;

    for (let row = 0; row < mat.length; row++) {
        for (let column = 0; column < mat[row].length; column++) {
            const element = mat[row][column];
            if (element === 1) {
                if (rowMap.has(row)) {
                    columnMap.set(column, 1);
                    continue;
                } else if (columnMap.has(column)) {
                    rowMap.set(row, 1);
                    continue;
                }
                rowMap.set(row, 1);
                columnMap.set(column, 1);
                let hasRight = countRight(mat[row], column + 1, columnMap);
                let hasDown = countDown(mat, row + 1, column);
                if (hasRight + hasDown === 0) {
                    countSpecialPosition++;
                }
            }  
        }
    }
    return countSpecialPosition;

    function countRight(array, start, columnMap) {
        if (start >= array.length) return 0;
        let hasRight = false;
        for (let i = start; i < array.length; i++) {
            const element = array[i];
            if (element === 1) {
                columnMap.set(i, 1);
                hasRight = true;
            }
        }
        return hasRight ? 1 : 0;
    }

    function countDown(matrix, start, column) {
        if (start >= matrix.length) return 0;
        for (let i = start; i < matrix.length; i++) {
            const element = matrix[i][column];
            if (element === 1)
                return 1;
        }
        return 0;
    }
}

// var numSpecial = function(mat) {
//     const columnMap = new Map();
//     const rowMap = new Map();
//     let countSpecialPosition = 0;

//     for (let row = 0; row < mat.length; row++) {
//         for (let column = 0; column < mat[row].length; column++) {
//             const element = mat[row][column];
//             if (element === 1) {
//                 if (rowMap.has(row)) {
//                     columnMap.set(column, 1);
//                     continue;
//                 } else if (columnMap.has(column)) {
//                     rowMap.set(row, 1);
//                     continue;
//                 }
//                 rowMap.set(row, 1);
//                 columnMap.set(column, 1);
//                 let hasRight = countRight(mat[row], column + 1);
//                 let hasDown = countDown(mat, row + 1, column);
//                 if (hasRight + hasDown === 0) {
//                     countSpecialPosition++;
//                 }
//             }  
//         }
//     }
//     return countSpecialPosition;

//     function countRight(array, start) {
//         if (start >= array.length) return 0;
//         for (let i = start; i < array.length; i++) {
//             const element = array[i];
//             if (element === 1)
//                 return 1;
//         }
//         return 0;
//     }

//     function countDown(matrix, start, column) {
//         if (start >= matrix.length) return 0;
//         for (let i = start; i < matrix.length; i++) {
//             const element = matrix[i][column];
//             if (element === 1)
//                 return 1;
//         }
//         return 0;
//     }
// }

// var numSpecial = function(mat) {
//     const columnMap = new Map();
//     const rowMap = new Map();

//     for (let row = 0; row < mat.length; row++) {
//         for (let column = 0; column < mat[row].length; column++) {
//             const currentElement = mat[row][column];

//             if (currentElement === 1) {
//                 if (rowMap.has(row)) {
//                     rowMap.set(row, rowMap.get(row) + 1);
//                 } else {
//                     rowMap.set(row, 1);
//                 }
//                 if (columnMap.has(column)) {
//                     columnMap.set(column, columnMap.get(column) + 1);
//                 } else {
//                     columnMap.set(column, 1);
//                 }
//             }
//         }
//     }
//     let countSpecialPosition = 0;
//     for (let index = 0; index < mat.length; index++) {
//         let rowCount = rowMap.get(index);
//         rowCount ??= 0;
//         let columnCount = columnMap.get(index);
//         columnCount ??= 0;
//         if (rowCount + columnCount > 0) {
//             if (rowCount + columnCount === 1) {
//                 countSpecialPosition++;
//             } else if (rowCount + columnCount === 2 && mat[index][index] === 1) {
//                 countSpecialPosition++;
//             }
//         }
//     }
//     return countSpecialPosition;


//     const iMap = new Map();
//     const jMap = new Map();
//     for (let i = 0; i < mat.length; i++) {
//         let iSum = 0;
//         for (let j = 0; j < mat[i].length; j++) {
//             iSum += mat[i][j];
//             if (jMap.has(j)) {
//                 jMap.set(j, jMap.get(j) + mat[i][j]);
//             } else {
//                 jMap.set(j, 0);
//             }
//         }
//         iMap.set(i, iSum);
//     }
//     let countSpecialPosition = 0;
//     for (let i = 0; i < mat.length; i++) {
//         if (iMap.get(i) + jMap.get(i) === 2) countSpecialPosition++;
//     }
//     return countSpecialPosition;



//     const rowMap = new Map();
//     const columnMap = new Map();
//     let countSpecialPosition = 0;
    
//     for (let row = 0; row < mat.length; row++) {
//         // количество 1 в этой строке
//         let currentRowCount = 0;
//         if (rowMap.has(row)) currentRowCount = rowMap.get(row);

//         // количество элементов в этой строке и этой колонке
//         let currentCount = 0;

//         // если это первая строка
//         if (row === 0) {
//             // идём по строке и считаем колонки
//             for (let column = 0; column < mat[row].length; column++) {
    
//                 // если попадается 1
//                 if (mat[row][column] === 1) {
                    
//                     // увеличиваем счётчик этого пересечения
//                     currentCount++;
    
//                     // увеличиваем счётчик этой строки
//                     currentRowCount++;
    
//                     // считаем вниз — сколько есть ещё 1 в этой колонке
//                     // let countInOtherColumn = countElementInColumn(mat, column, row + 1);
    
//                     let countInCurrentColumn;
    
//                     // если эта колонка уже была посчитана, то берём готовый результат, если нет, то считаем
//                     if (columnMap.has(column)) {
//                         countInCurrentColumn = columnMap.get(column);
//                     } else {
//                         countInCurrentColumn = countElementInColumn(mat, column, row + 1);
//                         columnMap.set(column, countInCurrentColumn);
//                     }
    
//                     // увеличиваем счётчик перекрёстка на количество 1 в этой колонке
//                     // currentCount += countInCurrentColumn;
//                 }
//             }
//         } 
//         if (currentCount === 1) countSpecialPosition++;
//         if (rowMap.has(row)) {
//             rowMap.set(row, rowMap.get(row) + currentRowCount);
//         } else {
//             rowMap.set(row, currentRowCount);
//         }
//     }

//     function countElementInColumn(mat, column, start) {
//         if (start >= mat.length) return 0;
//         let countEl = 0;
//         for (let i = start; i < mat.length; i++) {
//             if (mat[i][column] === 1) countEl++;
//         }
//         return countEl;
//     }

//     return countSpecialPosition;
// };


mat = [[1,0,0],[0,0,1],[1,0,0]]
console.log(numSpecial(mat)) // 1

mat = [[1,0,0],[0,1,0],[0,0,1]]
console.log(numSpecial(mat)) // 3

mat = [
    [0,0,0,1],
    [1,0,0,0],
    [0,1,1,0],
    [0,0,0,0]]
console.log(numSpecial(mat)) // 2

mat = [
    [0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,1]]
    console.log(numSpecial(mat)) // 2