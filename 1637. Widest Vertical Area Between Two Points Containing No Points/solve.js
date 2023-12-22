/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let arr = [];

    points.forEach(point => {
        arr.push(point[0]);
    })

    // console.log(arr)
    arr.sort((a, b) => a - b);
    // console.log(arr)

    let prevIndex;
    let size = 0;
    arr.forEach(el => {
        prevIndex ??= el;
        if (el - prevIndex > size) {
            size = el - prevIndex;
        }
        prevIndex = el;
    })

    return size;
};

points = [[8,7],[9,9],[7,4],[9,7]]
console.log(maxWidthOfVerticalArea(points)) // 1

points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]
console.log(maxWidthOfVerticalArea(points)) // 3

points = [[58,71],[64,41],[96,14],[26,37],[11,67],[84,2],[72,0],[16,95],[74,100],[60,98],[8,45],[6,59],[69,32],[93,12],[26,56],[9,39],[61,84],[54,93],[43,47],[84,40],[95,82],[17,85],[99,41],[96,24],[83,10],[82,62],[26,81],[74,96],[53,0],[11,72],[51,35],[33,3],[33,52],[58,94],[89,92],[54,85]]
console.log(maxWidthOfVerticalArea(points)) // 10






// '0   1   2   3   4   5   6   7  8   9  10'
// [0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0, 0, 0, 0, 0, 0]
// [0,  0,  0,  0,  0,  0,  0, 0, '1', 0,  0, 0, 0, 0, 0, 0]
// [0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0, 0, 0, 0, 0, 0]
// [0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0, 0, 0, 0, 0, 0]
// [0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0, 0, 0, 0, 0, 0]
// [0, '1', 0,  0,  0,  0,  0, 0,  0,  0,  0, 0, 0, 0, 0, 0]
// [0,  0,  0,  0,  0, '1', 0, 0,  0,  0,  0, 0, 0, 0, 0, 0]
// [0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0, 0, 0, 0, 0, 0]
// [0,  0,  0, '1', 0,  0,  0, 0,  0,  0,  0, 0, 0, 0, 0, 0]
// [0, '1', 0,  0,  0,  0,  0, 0,  0, '1', 0, 0, 0, 0, 0, 0]