let text = "Please don't scroll past this. This Monday, for the 1st time recently, we humbly ask you to defend Wikipedia's independence. 98% of our readers don't give; they simply look the other way. If you are an exceptional reader who has already donated, we sincerely thank you. If you donate just $2.75, or whatever you can this Monday, Wikipedia could keep thriving for years. Most people donate because Wikipedia is useful. If Wikipedia has given you $2.75 worth of knowledge this year, take a minute to donate. Show the world that access to reliable, neutral information matters to you. Thank you."


// Validates each word
function isValidWord(word) {
    return word.length > 0;
}

// Removes special chars and sorts the words in alph order
function cleanString(string) {
    const specialCharacters = new Set([" ", ".", ",", ";"])
    let currentWord = []
    let sortedWords = []

   for (let i = 0; i < string.length; i++) {
       if (!specialCharacters.has(string[i])) {
           currentWord.push(string[i].toLowerCase())
       } else {
           let joined = currentWord.join("")
           if (isValidWord(joined)) {
           sortedWords.push(joined)
           currentWord = []
           }
       }
   }
   return sortedWords
}

// Adds sorted words to a map
function mapWords(sortedWords) {
    let wordCountMap = new Map()

    for (let i = 0; i < sortedWords.length; i++) {
        let currentWord = sortedWords[i]
        if (wordCountMap.has(currentWord)) {
            wordCountMap.set(currentWord, wordCountMap.get(currentWord) + 1);
        } else {
            wordCountMap.set(currentWord, 1)
        }
    }
    console.log(wordCountMap)
}

function wordCounter(string) {
    let words = cleanString(string)
    mapWords(words)
}

wordCounter(text)