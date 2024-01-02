/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    if (s.length === 0) return 0;
    s = s.sort((a, b) => a - b);
    g = g.sort((a, b) => a - b);
    let jIndex = 0;
    let contentCount = 0;
    for (let i = 0; i < g.length; i++) {
        for (let j = jIndex; j < s.length; j++) {
            if (g[i] <= s[j]) {
                s[j] = 0;
                contentCount++;
                jIndex = j + 1;
                break;
            }
        }
    }
    return contentCount;
};

let g = [1,2,3];
let s = [1,1];
console.log(findContentChildren(g, s)) // 1

g = [1,2];
s = [1,2,3];
console.log(findContentChildren(g, s)) // 2

g = [10,9,8,7];
s = [5,6,7,8];
console.log(findContentChildren(g, s)) // 2

