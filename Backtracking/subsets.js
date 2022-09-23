//Note this problem is not the same as permuations
// https://leetcode.com/problems/subsets/

function subsets(nums) {
    let result = []
    let subset = []
    
    function dfs(i) {
        if (i >= nums.length) {
            result.push(subset.slice())
            return
        }
        // decision to include nums[i]
        subset.push(nums[i])
        dfs(i + 1)

        // decision not to include nums[i]
        subset.pop()
        dfs(i + 1)
    }

    dfs(0)
    return result
}


const nums = [1, 2, 3]
subsets(nums)