// Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.
// For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...".
// We will call such a concatenation the transformation of a word.
// Return the number of different transformations among all words we have.

// Build the morse code strings
// See how many unique strings there are
// O(n^2) Time Complexity
// O(n) space complexity
function morseCode(words) {
    let transformation = ""
    let uniqueTransformations = new Set()
    let code = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let letters = "abcdefghijklmnopqrstuvwxyz"
    const morseKey = new Map(code.map((letter, index) => [letters[index], letter]))


    // Translate each word to morse code
    // Add each translated word to answerSet
    // Sets can only contain unique values

    for (let i = 0; i < words.length; i++) {
        let splitWord = words[i].split("")
        
        for (let j = 0; j < splitWord.length; j++) {
            transformation+= morseKey.get(splitWord[j])
        }
        uniqueTransformations.add(transformation)
        transformation = ""
    }

    console.log(uniqueTransformations.size)
    

}

// Transform each word
// Add it to a set only if the set doesn't already include it
// This is actually slower than the other solution but easier to read
function morseCodeSlower(words) {
    let code = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let letters = "abcdefghijklmnopqrstuvwxyz"
    const morseKey = new Map(code.map((letter, index) => [letters[index], letter]))

    const uniqueTransformations = new Set(words.map(word => word.split('').map(letter => morseKey.get(letter)).join('')))
    return uniqueTransformations.size
}

let words = ["gin","zen","gig","msg"]
morseCode(words)