// Given an integer array nums and an integer val
// remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

// Since it is impossible to change the length of the array in some languages
// you must instead have the result be placed in the first part of the array nums.
// More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result.
// It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1
 let nums = [3, 2, 2, 3]
 let val = 3
// Output = 2, nums = [2, 2,. ...] where 2 is the length and it doesn't matter what's after the 2's

// Example 2
// let nums = [0, 1, 2, 2, 3, 0, 4, 2]
// let val = 2
// output = 5, nums = [0, 1, 3, 0, 4, 2, 2]
// Essentially, moving all occurrences of val to the end of the array 
 

// iterate over the whole thing
// if currentNum === val, add the end of array


function removeElement(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] === val) {
            nums.splice(i, 1)
        }
    }
    console.log(nums.length)
    console.log(nums)
}

removeElement(nums, val)
