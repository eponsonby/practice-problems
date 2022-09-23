// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 

// split into 2 arrays at n -1
// iterate over both
// add one el from each array to answer array


function shuffle(nums, n) {

    let xNums = nums.slice(0, n)
    let yNums = nums.slice(n)
    const shuffled = []

    for (let i = 0; i < yNums.length; i++) {
        shuffled.push(xNums[i])
        shuffled.push(yNums[i])
    }
    return shuffled

}

function fasterShuffle(nums, n) {
    let shuffled = []

    for(let i = 0; i < n; i++) {
        shuffled.push(nums[i])
        shuffled.push(nums[n + i])
    }

    console.log(shuffled)


}
let nums = [2,5,1,3,4,7]
let n = 3

fasterShuffle(nums, n)