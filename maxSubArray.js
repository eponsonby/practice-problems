
// Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// let nums = [1]
// Output: 1

// Brute Force Solution
// O(n^2) time complexity due to nested loops
function maxSubArray(nums) {

    // Use -Infinity instead of 0 because it's possible to have array of just negative nums
    let maxSubArray = -Infinity

    for (let i = 0; i < nums.length; i++) {
        let currentSubArray = 0
        for (let j = i; j < nums.length; j++) {
            currentSubArray+= nums[j]
            maxSubArray = Math.max(maxSubArray, currentSubArray)
        }
    }

    console.log(maxSubArray)

}


// Dynamic Programming or Kadane's Algorithm Solution
// Time complexity o(n)
// Space complexity o(1)

function maxSubArray(nums) {
    let currentSubArray = nums[0]
    let maxSubArray = nums[0]

    for (let i = 1; i < nums.length; i++) {
        let num = nums[i]
        // For each number in nums, add it to the currentSubarray we are building
        /// If currentSubarray becomes negative, we know it isn't worth keeping, so throw it away
        // Remember to update maxSubarray every time we find a new maximum

        // Clever way to update currentSubArray: If currentSubArray is negative, then num is greater than currentSubarray + num
        currentSubArray = Math.max(num, currentSubArray + num)
        maxSubArray = Math.max(maxSubArray, currentSubArray)
    }

    return maxSubArray

}

// Divide and Conquer Approach
function maxSubArray(nums) {
    function findBestSubArray(nums, left, right) {
        // Base case
        if (left > right) return -Infinity

        mid = left + right
        curr, bestLeftSum, bestRightSum = 0


    }

}
let nums = [-2,1,-3,4,-1,2,1,-5,4]
maxSubArray(nums)