// You are a product manager and currently leading a team to develop a new product.
// Unfortunately, the latest version of your product fails the quality check.
// Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one,
// which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad.
// Implement a function to find the first bad version. You should minimize the number of calls to the API.

// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.

// This is the outline from LeetCode. I really did not understand it so I tried solving it a different way although
// one of the params is the bad version...

// /**
//  * Definition for isBadVersion()
//  * 
//  * @param {integer} version number
//  * @return {boolean} whether the version is bad
//  * isBadVersion = function(version) {
//  *     ...
//  * };
//  */

// /**
//  * @param {function} isBadVersion()
//  * @return {function}
//  */
//  var solution = function(isBadVersion) {
//     /**
//      * @param {integer} n Total versions
//      * @return {integer} The first bad version
//      */
    
//     return function(n) {
        
//     };
// };

// This is what they were looking for

var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      let start = 1
      end = n

      while(start < end) {
          let middle = Math.floor((start + (end - start)) / 2)
          if (isBadVersion(middle)) {
              end = middle // look to the left of mid
          } else {
              start = middle + 1 // look to the right of mid
          }
      }
      return start
  }
  
}


// function isBadVersion(numberOfVersions, badVersion) {
//     // construct an array from 1 to numberOfVersions
//     // use binarySearch to find the badVersion (the target)

//     function rangeOfNumbers(startNum, endNum) {
//         if (endNum - startNum === 0) {
//           return [startNum];
//         } else {
//           let numbers = rangeOfNumbers(startNum, endNum - 1);
//           numbers.push(endNum);
//           return numbers
//         }
//       }

//     let versions = rangeOfNumbers(1, numberOfVersions)

//     let start = 0
//     let end = versions.length - 1
//     let middle = ((start + end) / 2 )

//     while (badVersion != versions[middle]) {
//         if (badVersion < versions[middle]){
//             end = middle - 1
//         } else {
//             start = middle + 1
//         }
//         middle = ((start + end) / 2)
//     }
//         return middle === versions[middle] ? middle : -1
// }

    

isBadVersion(5, 4)

