/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    let countBeams;
    let beams = [];
    for (let i = 0; i < bank.length; i++) {
        let currentCount = 0;
        for (let j = 0; j < bank[i].length; j++) {
            if (bank[i][j] == 1) {
                currentCount++;
            }
        }
        if (currentCount > 0) {
            beams.push(currentCount);
        }
    }
    if (beams.length < 2) return 0;
    countBeams = beams[0] * beams[1];
    for (let i = 2; i < beams.length; i++) {
        countBeams += beams[i - 1] * beams[i];
    }
    return countBeams;
};

let bank = ["011001", "000000", "010100", "001000"];
console.log(numberOfBeams(bank)); // 8
console.log()

bank = ["000", "111", "000"];
console.log(numberOfBeams(bank)); // 0