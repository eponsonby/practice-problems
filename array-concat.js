/// Given an integer array nums of length n,
// Create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

function concatArray(nums){
    // let answer = []

    // answer.push(nums)
    // answer.push(nums)
    // console.log(answer.flat(1))

    console.log([...nums, ...nums])


}

let nums = [1, 2, 1]
concatArray(nums)