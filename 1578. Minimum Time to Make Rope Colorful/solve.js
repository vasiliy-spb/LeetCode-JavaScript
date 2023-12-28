/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let substringStartIndex = 0;
    let prevColor = colors[0];
    let totalTime = 0;
    for (let i = 1; i < colors.length; i++) {
        const color = colors[i];
        if (color != prevColor) {
            // console.log(`substringStartIndex = ${substringStartIndex}, i = ${i}`)
            if (i - substringStartIndex > 1) {
                let currentNeededTime = 0;
                let maxTime = neededTime[substringStartIndex];
                for (let j = substringStartIndex + 1; j < i; j++) {
                    const time = neededTime[j];
                    if (time > maxTime) {
                        currentNeededTime += maxTime;
                        maxTime = time;
                    } else {
                        currentNeededTime += time;
                    }
                }
                // console.log(`currentNeededTime = ${currentNeededTime}`)
                totalTime += currentNeededTime;
            } 
            substringStartIndex = i;
            prevColor = color;
        }
    }
    if (colors.length - substringStartIndex > 1) {
        // console.log(`substringStartIndex = ${substringStartIndex}, colors.length = ${colors.length}`)
        let currentNeededTime = 0;
        let maxTime = neededTime[substringStartIndex];
        for (let j = substringStartIndex + 1; j < colors.length; j++) {
            const time = neededTime[j];
            if (time > maxTime) {
                currentNeededTime += maxTime;
                maxTime = time;
            } else {
                currentNeededTime += time;
            }
        }
        // console.log(`currentNeededTime = ${currentNeededTime}`)
        totalTime += currentNeededTime;
    } 
    return totalTime;
};


colors = "abaac";
neededTime = [1,2,3,4,5];
console.log(minCost(colors, neededTime)); // 3
console.log()

colors = "abc";
neededTime = [1,2,3];
console.log(minCost(colors, neededTime)); // 0
console.log()

colors = "aabaa";
neededTime = [1,2,3,4,1];
console.log(minCost(colors, neededTime)); // 2
console.log()

// colors = "abaac";
// neededTime = [1,2,3,4,5];
// console.log(minCost(colors, neededTime));





