// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.
// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.
 
let nums = [7,5,6,8,3]

// Output: 2
// Explanation:
// The smallest number in nums is 2.
// The largest number in nums is 10.
// The greatest common divisor of 2 and 10 is 2.


// Find the largest and smallest number
// Find the GCD
// Divisors can be any number between 1 and n

// O(n) time complexity
function gcdArray(nums) {
    const sorted = nums.sort(function(a, b) {
        return a - b
    })
    
    let divisors = []
    let gcd = 1
    let subArray = []
    let smallest = sorted[0]
    let largest = sorted[sorted.length - 1]
    subArray.push(smallest)
    subArray.push(largest)

    
    for (let i = 1; i <= subArray.length; i++) {
        if (subArray[i] % i === 0 ) {
                divisors.push(i)
            }
        }

    for (let i = 1; i <= largest; i++) {
        if (largest % i === 0 && divisors.includes(i)) {
                gcd = i
                }
        }

        console.log(gcd)
    
}


// More succinct but slightly slower
// O(n) time complexity
function gcdArraySlower(nums) {

    let largest = Math.max(...nums)
    let smallest = Math.min(...nums)

    for (let i = smallest; i >= 1; i--)
        if (smallest % i === 0 && largest % i === 0) {
            console.log(i)
            return i
        }

}
gcdArraySlower(nums)
