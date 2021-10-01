// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Input: strs = ["flower","flow","flight"]
// Output: "fl"


// Input: strs = ["dog","racecar","car"]
// Output: ""


// had to look this one up, could not figure it out



// function common(strings) {
//     let split = []
    
//     for (let i = 0; i < strings.length; i++) {
//         split.push(strings[i].split(''))
//     }

//     // shift the first letter of each word
//     // print it
//     // stop when all three letters are not the same
//     let currentString = ''
//     let currentLetter = ''

//     for (let i = 0; i < split.length; i++) {
//         console.log(i)
//         for (let j = 0; j < split[i].length; j++) {
//             console.log(j)
//         }
//     }

    // function recursion(currentString, currentLetter, split) {
    //     console.log(split.length)

    //     if (currentString.length === split.length) {
    //     // console.log(currentString)
    //     return 
    //     }

    //     for (let i = 0; i < split.length; i++) {
    //         currentLetter = split[i].shift()
    //         recursion(currentString + currentLetter)
    //     }

    // }

    // recursion(currentString, currentLetter, split)
    

    // This is the solution I looked up
    // And reimplemented from memory

    function prefix(strings) {
        console.log(strings)

        let prefix = strings[0]

        for (let i = 1; i < strings.length; i++) {
            for (let k = 0; k < prefix.length; k++) {
                if(strings[i][k] != prefix[k]) {
                    prefix = prefix.slice(0, k)
                }
            }
        }
            console.log(prefix)
            return prefix
    }
    

let strings = ["flower", "flow", "flight"]

prefix(strings)
        