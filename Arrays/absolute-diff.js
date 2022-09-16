// Given an integer array nums and an integer k,
// return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k

// Input: nums = [3,2,1,5,4], k = 2
// Output: 3
// Explanation: The pairs with an absolute difference of 2 are:
// - [3,1]
// - [3,5]
// - [2,4]

function countDiff(nums, k) {
    var count = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            let diff = nums[i] - nums[j]
            if (diff === k || diff === -k) {
                count++
                j++
            }
        }
    }
    console.log(count)
}



const nums = [1,2,2,1]
const k = 1
countDiff(nums, k)