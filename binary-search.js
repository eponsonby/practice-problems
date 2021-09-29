// Given an array of integers (nums) which is sorted in ascending order, and an integer (target),
// write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.


// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Note: To Run This Code:
    // Install the code runner extension
    // Press control + option + n to run (on mac) or control + alt + n (on windows)

function binarySearch(nums, target) {
    let start = 0
    let end = nums.length - 1
    let middle = Math.floor((start + end) / 2)


    // loop through until num[middle] == target or start > end
    while(nums[middle] != target && start <= end) {
        if (target < nums[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
        // recalculate middle each time
        middle = Math.floor((start + end) / 2)
    }
        if (nums[middle] === target) {
            console.log(middle)
        } else {
            console.log(-1)
        }

        // Using the above so that the console.log statements are visible
        // return nums[middle] === target ? middle : "Number not found"
}

let nums = [-1,0,3,5,9,12]
let target = 2
binarySearch(nums, target)

// Other Test Cases

// let nums = [-1,0,3,5,9,12]
// let target = 2