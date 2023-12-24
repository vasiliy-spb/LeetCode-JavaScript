/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    const map = new Map();
    let x = 0;
    let y = 0;
    map.set(x,[y]);
    for (let i = 0; i < path.length; i++) {
        const element = path[i];
        switch (element) {
            case 'N':
                y++;
                break;
                case 'E':
                x++;
                break;
                case 'S':
                y--;
                break;
                case 'W':
                x--;
                break;
        }
        if (!map.has(x)) {
            map.set(x, []);
        }
        let arr = map.get(x);
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === y) {
                return true;
            }
        }
        arr.push(y);
    }
    return false;
};

path = "NES"
console.log(isPathCrossing(path)); // false

path = "NESWW"
console.log(isPathCrossing(path)); // true

path = "EESESSWSE"
console.log(isPathCrossing(path)); // false
