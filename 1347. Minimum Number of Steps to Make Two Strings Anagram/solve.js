/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let count = 0;
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], 0);
        }
        map.set(s[i], map.get(s[i]) + 1);
        if (!map.has(t[i])) {
            map.set(t[i], 0);
        }
        map.set(t[i], map.get(t[i]) - 1);
    }
    for (let num of map.values()) {
        if (num < 0) {
            count -= num;
        }
    }
    return count;
};