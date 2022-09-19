function permutations(nums) {
    const result = []

    // if nums.length = 1, return a copy of it
    if (nums.length === 1) {
        return [nums.slice()]
    }

    // iterate through nums
    for (const i of nums) {
         // remove the first item from nums
        let n = nums.shift()

        let perms = permutations(nums)

        for (const perm of perms) {
            perm.push(n)
        }

        perms.forEach((perm) => {
            result.push(perm)
        })

        nums.push(n)

    }
    
    return result
}

console.log(permutations([1, 2, 3]))