// Given an array of integers arr,
// return true if the number of occurrences of each value in the array is unique, or false otherwise.

let arr = [1,2,2,1,1,3]

// O(n) time complexity
function unique(arr) {
    let count = 0
    let countTracker = []
    let sorted = arr.sort((a, b) => a - b)

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === sorted[i+1]) {
            count++
        } else if (sorted[i] != sorted[i+1]) {
            if (countTracker.includes(count)) {
                console.log(false)
                return false
            } else {
                countTracker.push(count)
                count = 0
            }
        }
    }
    console.log(true)
    return true
}

// Faster version
// Also O(n)
function uniqueFaster(arr) {
    let nums = new Map()

    for (let num of arr) {
        if (nums.has(num)) {
            nums.set(num, (nums.get(num) + 1))
        } else {
            nums.set(num, 1)
        }
    }

    let valuesSet = new Set()

    for (const val  of nums.values()) {
        if (valuesSet.has(val)) return false
        valuesSet.add(val)
    }

    console.log(true)
    return true
}

uniqueFaster(arr)
