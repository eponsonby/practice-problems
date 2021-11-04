// Give a binary string s, return the number of non-empty substrings
// that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

// Substrings that occur multiple times are counted the number of times they occur.

function subStrings(string) {
    let groups = []
    let t = 0
    groups[0] = 1

    for (let i = 1; i < string.length; i++) {
        if (string.charAt(i-1) != string.charAt(i)) {
            groups.push(1)
            t++
        } else {
            groups[t]++
        }
    }

    let answer = 0
    for (let i = 1; i <=t; i++) {
        answer += Math.min(groups[i-1], groups[i])
    }
    return answer
}

let string = "00110011"

subStrings(string)
