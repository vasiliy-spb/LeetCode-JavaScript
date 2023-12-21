/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    let balance;
    let firstMinPrice;
    let secondMinPrice;
    for (let i = 0; i < prices.length; i++) {
        if (!firstMinPrice) {
            firstMinPrice ??= prices[i];
            continue;
        }
        if (prices[i] <= firstMinPrice) {
            secondMinPrice = firstMinPrice;
            firstMinPrice = prices[i];
        } else if (prices[i] < secondMinPrice) {
            secondMinPrice = prices[i];
        }
        if (!secondMinPrice) {
            secondMinPrice ??= prices[i];
        }

    }
    balance = money - firstMinPrice - secondMinPrice;
    return balance >= 0 ? balance : money;
};

prices = [1,2,2];
money = 3;
console.log(buyChoco(prices, money)) // 0

prices = [3,2,3];
money = 3;
console.log(buyChoco(prices, money)) // 3

