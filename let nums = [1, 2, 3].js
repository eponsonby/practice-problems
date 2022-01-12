let nums = [14, 28, 7]

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

