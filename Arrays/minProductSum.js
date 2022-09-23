// The product sum of two equal-length arrays a and b is equal to
// the sum of a[i] * b[i] for all 0 <= i < a.length (0-indexed).

// For example, if a = [1,2,3,4] and b = [5,2,3,1],
// the product sum would be 1*5 + 2*2 + 3*3 + 4*1 = 22.

// Given two arrays nums1 and nums2 of length n,
// return the minimum product sum if you are allowed to rearrange the order of the elements in nums1. 

// Input: nums1 = [5,3,4,2], nums2 = [4,2,2,5]
// Output: 40
// Explanation: We can rearrange nums1 to become [3,5,4,2].
// The product sum of [3,5,4,2] and [4,2,2,5] is 3*4 + 5*2 + 4*2 + 2*5 = 40.


// Input: nums1 = [2,1,4,5,7], nums2 = [3,2,4,8,6]
// Output: 65

// Sort the two arrays
// Find the product of the highest value of one array and the lowest value of the other

function minProductSum(nums1, nums2) {
    let sum = 0
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => b - a)

    for (let i = 0; i < nums1.length; i++) {
        sum+= nums1[i] * nums2[i]
    }
    console.log(sum)
}

const nums1 = [2, 1, 4, 5, 7]
const nums2 = [3, 2, 4, 8, 6]
minProductSum(nums1, nums2)