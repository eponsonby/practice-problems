// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money
// the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts.
// The richest customer is the customer that has the maximum wealth.

let accounts = [[1,5],[7,3],[3,5]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6


// O(n^2) time complexity
// O(n) space complexity
function richestCustomer(accounts) {
    let total = 0
    let currentTotal = 0

    for (let i = 0; i < accounts.length; i++) {
        accounts[i].map(amount => currentTotal+= amount)
        total = Math.max(total, currentTotal)
        currentTotal = 0
    }

    console.log(total)
}

richestCustomer(accounts)