/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
    let tempImg = [];

    for (let i = 0; i < img.length; i++) {
        tempImg.push([]);
        for (let j = 0; j < img[i].length; j++) {
            let sum = 0;
            let count = 1;
            sum += img[i][j];
            if (i - 1 >= 0 && j - 1 >= 0) {
                sum += img[i - 1][j - 1];
                count++;
            }
            if (i - 1 >= 0) {
                sum += img[i - 1][j];
                count++;
            }
            if (i - 1 >= 0 && j + 1 < img[i].length) {
                sum += img[i - 1][j + 1];
                count++;
            }
            if (j - 1 >= 0) {
                sum += img[i][j - 1];
                count++;
            }
            if (j + 1 < img[i].length) {
                sum += img[i][j + 1];
                count++;
            }
            if (i + 1 < img.length && j - 1 >= 0) {
                sum += img[i + 1][j - 1];
                count++;
            }
            if (i + 1 < img.length) {
                sum += img[i + 1][j];
                count++;
            }
            if (i + 1 < img.length && j + 1 < img[i].length) {
                sum += img[i + 1][j + 1];
                count++;
            }
            tempImg[i].push(Math.floor(sum / count));
        }
    }
    for (let i = 0; i < tempImg.length; i++) {
        for (let j = 0; j < tempImg[i].length; j++) {
            img[i][j] = tempImg[i][j];
        }
    }
    return img;
};

img = [[1,1,1],[1,0,1],[1,1,1]]
console.log(imageSmoother(img)) // [[0,0,0],[0,0,0],[0,0,0]]

img = [[100,200,100],[200,50,200],[100,200,100]]
console.log(imageSmoother(img)) // [[137,141,137],[141,138,141],[137,141,137]]
