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

let nums = [7,5,6,8,3]

gcdArray(nums)