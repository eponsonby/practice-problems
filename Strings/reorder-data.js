// You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

// There are two types of logs:

// Letter-logs: All words (except the identifier) consist of lowercase English letters.
// Digit-logs: All words (except the identifier) consist of digits.
// Reorder these logs so that:

// The letter-logs come before all digit-logs.
// The letter-logs are sorted lexicographically by their contents.
// If their contents are the same, then sort them lexicographically by their identifiers.
// The digit-logs maintain their relative ordering.
// Return the final order of the logs.

 let logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
// Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
// Explanation:
// The letter-log contents are all different, so their ordering is "art can", "art zero", "own kit dig".
// The digit-logs have a relative order of "dig1 8 1 5 1", "dig2 3 6".


function reorder(logs) {
    let lastChar = ""
    let digitLogs = []
    let letterLogs = []

    for (let i = 0; i < logs.length; i++) {
        lastChar = logs[i].charAt(logs[i].length -1)
        if (!isNaN(lastChar)) {
            digitLogs.push(logs[i])
        } else {
            letterLogs.push(logs[i])
        }
    }

    letterLogs.sort((firstEl, secondEl) => {
        const firstElContents = firstEl.split(" ").splice(1).join(" ")
        const secondElContents = secondEl.split(" ").splice(1).join(" ")
        const compare = firstElContents.localeCompare(secondElContents)

        // localeCompare
        // referenceString.localeCompare(compareString)
        // Returns negative when ref str comes before compare str
        // Returns positive when ref str occurs after compare str
        // Returns 0 if they are equivalent

        // If they are equivalent compare them on their identifiers
        // If not return compare
        return compare === 0 ? firstEl.localeCompare(secondEl) : compare
    })

    return letterLogs.concat(digitLogs)

}

reorder(logs)