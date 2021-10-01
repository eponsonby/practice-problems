// Given an integer array nums sorted in non-decreasing order
// return an array of the squares of each number sorted in non-decreasing order.

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].


function squares(nums) {
    
    let answer = []
    let i = 0
    let k = 0

    if (nums.length === 0) return undefined

    while (i < nums.length) {
        let square = nums[i] * nums [i]
        
        if (square > answer[k]) {
            k++
            } else if (square <= answer[k]) {
                answer.splice(k, 0, square)
                i++
                } else {
                    answer.push(square)
                    i++
                }
    }
    console.log(answer)
    return answer
}


let nums = [-7,-3,2,3,11]
squares(nums)