/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const citySet = new Set();
    const indexMap = new Map();
    paths.forEach(path => {
        for (let i = 0; i < path.length; i++) {
            const city = path[i];
            if (citySet.has(city)) {
                citySet.delete(city);
            } else {
                citySet.add(city);
                indexMap.set(city, i);
            }
        }
    });
    let desinationCity;
    citySet.forEach(city => {
        if (indexMap.get(city) === 1)
            desinationCity = city;
    });
    return desinationCity;
};

paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
console.log(destCity(paths)) // "Sao Paulo"

paths = [["B","C"],["D","B"],["C","A"]]
console.log(destCity(paths)) // "A"

paths = [["A","Z"]]
console.log(destCity(paths)) // "Z"
