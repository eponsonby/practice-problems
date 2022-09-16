// Given a zero-based permutation nums (0-indexed)
// build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

function buildArray(nums) {
    // let answer = []

    // for (let i = 0; i < nums.length; i++) {
    //     answer.push(nums[nums[i]])
    // }

    let answer = nums.map((num, index) => nums[nums[index]])
    console.log(answer)

}

let nums = [0,2,1,5,3,4]

buildArray(nums)