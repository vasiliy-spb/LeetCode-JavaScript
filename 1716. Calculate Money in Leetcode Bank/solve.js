/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let sumByFullWeeks = 0;
    let sumByOtherDays = 0;

    let fullWeek = Math.floor(n / 7);
    let otherDays = n % 7;

    if (fullWeek >= 0)
        sumByFullWeeks = 28 * fullWeek + (addForFullWeeks(fullWeek - 1));
    fullWeek++;
    while (otherDays > 0) {
        sumByOtherDays += fullWeek++;
        otherDays--;
    }

    function addForFullWeeks (weeksCount) {
        let res = 0;
        while (weeksCount > 0) {
            res += 7 * weeksCount--;
        }
        return res;
    }
    return sumByOtherDays + sumByFullWeeks;
};

console.log(totalMoney(4)) // 10
console.log(totalMoney(10)) // 37
console.log(totalMoney(20)) // 96
console.log(totalMoney(26)) // 135 = 7 * 3 + 5


// 2 = 7 * 1
// 3 = 7 * 3
// 4 = 7 * 6
// 5 = 7 * 10
// 6 = 7 * 15
