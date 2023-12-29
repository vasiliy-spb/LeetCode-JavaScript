/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let prev = chars[0];
    let indexStart = 0;
    let insertIndex = 0;
    for (let i = 1; i < chars.length; i++) {
        const element = chars[i];
        if (element != prev) {
            let count = i - indexStart;
            chars[insertIndex++] = prev;
            if (count > 1) {
                let nums = Array.from(String(count));
                for (let j = 0; j < nums.length; j++) {
                    chars[insertIndex++] = nums[j];
                }
            }
            prev = element;
            indexStart = i;
        }
    }
    if (chars.length > indexStart) {
        let count = chars.length - indexStart;
        chars[insertIndex++] = prev;
        if (count > 1) {
            let nums = Array.from(String(count));
            for (let j = 0; j < nums.length; j++) {
                chars[insertIndex++] = nums[j];
            }
        }
    }
    chars = chars.slice(0, insertIndex);

    // console.log(chars)

    return chars.length;
};


let chars = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(chars)) // 6
console.log()

chars = ["a"];
console.log(compress(chars)) // 1
console.log()

chars = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];
console.log(compress(chars)) // 4
console.log()

