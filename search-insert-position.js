//Given a sorted array of distinct integers and a target value,
// return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Didn't quite get this one figured out but spent too much time, moved on

function searchInsert(nums, target) {

    let start = 0
    let end = nums.length - 1
    let middle = Math.floor((start + end) / 2)

    if (target === 0) return 0

    while (nums[middle] != target && start <= end) {
        if (target > nums[middle]) {
            start = middle + 1
            if (start === end || start > end) return end - 1
        } else {
            end = middle - 1
            if (start === end || start > end) return end + 1
        }
        
        middle = Math.floor((start + end) / 2)
    }

    if (nums[middle] === target) return middle

}

let nums = [1, 3]
let target = 2

searchInsert(nums, target)


// Example 1
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3
// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Example 4
// Input: nums = [1,3,5,6], target = 0
// Output: 0

// Example 5
// Input: nums = [1], target = 0
// Output: 0