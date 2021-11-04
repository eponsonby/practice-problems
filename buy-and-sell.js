// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and
// choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.


// O(n^2) time complexity
function buyAndSell(prices) {
    let maxProfit = 0

    for (let i = 0; i < prices.length; i++) {
        let currentProfit = 0
        for (let j = i; j < prices.length; j++) {
            if (i !== j && prices[j] > prices[i]) {
                currentProfit = prices[j] - prices[i]
                maxProfit = Math.max(currentProfit, maxProfit)
            }
        }
    }
    console.log(maxProfit)
    return maxProfit
}


// O(n) time complexity
// O(1) space complexity
function buyAndSellFaster(prices){
    let min = Infinity
    let max = 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        } else if (prices[i] - min > max) {
            max = prices[i] - min
        }
    }
        console.log(max)

}

let prices = [7,1,5,3,6,4]
buyAndSellFaster(prices)