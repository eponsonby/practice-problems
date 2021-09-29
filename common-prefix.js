// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Input: strs = ["flower","flow","flight"]
// Output: "fl"


// flo
// flo
// fli

// first print first letter of each word
// print second letter of each word
// print third letter of each word
// stop when all three letters are not the same


// Input: strs = ["dog","racecar","car"]
// Output: ""



function printChars(alphabet, n, currString){
    // base case
    if (currString.length === n) {
      console.log(currString);
      return
    }
    
    // We need to extend currString by append all possible characters to it.
    for (var i = 0; i < alphabet.length; i++) {
      // Append alphabet[i] to currString and call recursively.
      printChars(alphabet, n, currString + alphabet[i]);
    }

    
function common(strings) {
    let split = []
    
    for (let i = 0; i < strings.length; i++) {
        split.push(strings[i].split(''))
    }

    let i = 0
    
    function recursion(split) {

        if ()
        for (let i = 0; i < split.length; i++) {
        recursion(split[i])
        }
    }

}

function add(num) {

    if (num === 1) return 1
    return num + add(num - 1)

}

add(5)


let strings = ["flower", "flow", "flight"]

common(strings)