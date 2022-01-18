// Given an integer number n,
// return the difference between the product of its digits and the sum of its digits.

// Input: n = 234
// Output: 15 

// Find product of digits
// Find sum of digits
// product - sum = answer

function product(n) {
    
    const arrayOfDigits = Array.from(String(n), Number);
    let sum = 0
    let product = 1

    for (let i = 0; i < arrayOfDigits.length; i++) {
        sum+= arrayOfDigits[i]
        product = product * arrayOfDigits[i]
    }

    return product - sum

}

let n = 234
product(n)
