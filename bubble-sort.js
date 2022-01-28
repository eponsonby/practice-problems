// Given an array of integers nums, sort the array in ascending order.
// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]

// Bubble sort is a sorting algorithm where the largest values bubble
// up to the top
// Time complexity: O(n^2)

// As we loop through, we compare each element to the element next to it.
// Swap if needed so the two elements are in order

// Many sorting algorithms involve some type of swapping functionality
// Here is one way to swap two values

function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function bubbleSort(array) {}

let nums = [5, 2, 3, 1];
bubbleSort(nums);
