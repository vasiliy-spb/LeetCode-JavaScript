/**
 * @param {string} s
 * @return {boolean}
 */
// variant 1
var halvesAreAlike = function (s) {
    let countLeft = 0;
    let countRight = 0;
    let chars = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        chars.forEach(char => {
            if (s[i] == char) countLeft++;
            if (s[j] == char) countRight++;
        })
    }
    return countLeft === countRight;
};

// variant 2
var halvesAreAlike = function (s) {
    let balance = 0;
    let chars = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        chars.forEach(char => {
            if (s[i] == char) balance++;
            if (s[j] == char) balance--;
        })
    }
    return balance === 0;
};

// variant 3
var halvesAreAlike = function (s) {
    let balance = 0;
    let chars = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (chars.has(s[i])) balance++;
        if (chars.has(s[j])) balance--;
    }
    return balance === 0;
};