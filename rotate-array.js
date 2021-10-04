// Given an array, rotate the array to the right by k steps, where k is non-negative.


// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]


// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Rotate means rotate the numbers, like take the last num and move to the front
// This is a multiple pointers question

//[1,2,3,4,5,6,7]
//[7,1,2,3,4,5,6]
//[6,7,1,2,3,4,5]
//[5,6,7,1,2,3,4]

// loop k times
// on each loop
// poppping off the last number (popped = array.pop)
// unshift it to the front  (array.unshift(popped))

// Option 1
// O(n) time complexity? Note sure how unshift and pop effect time complexity
// function rotate(nums, k) {

//     for (let i = 0; i < k; i++) {
//         let popped = nums.pop()
//         nums.unshift(popped)
//     }

//     console.log(nums)

// }

// Option 2
// O(1)
// Works but doesn't meet criteria because doesn't modify nums in place

// function rotate(nums, k) {
//     let target = nums.length - k
//     console.log(nums.slice(target) + "," + nums.slice(0, target))
// }

// Option 3
// [1,2,3,4,5,6,7]

// reverse entire array
// Reverse each part
// reverse 0 - 2
// reverse 3 - 6

// Below still doesn't reverse in place
 function rotate(nums, k) {

     rotate(nums, k)
     k = k
     nums.reverse()

     let first = nums.slice(0, 3).reverse()
        nums.slice(3, -1).reverse()
 }



let nums = [1,2,3,4,5,6,7]
let k = 3
rotate(nums, k)