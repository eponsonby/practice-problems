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

// I starts at the end of the array and moves towards the front
// J starts at the beginning and loops through to i (the end)
// Because the last values (i+) have been sorted

function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  console.log(array);
  return array;
}

let nums = [5, 2, 3, 1];
bubbleSort(nums);
