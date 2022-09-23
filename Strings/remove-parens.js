// A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings
// and + represents string concatenation.

// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// A valid parentheses string s is primitive if it is nonempty,
// and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk,
// where Pi are primitive valid parentheses strings.

// Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

let s = "(()())(())"
// Output: "()()()"
// Explanation: 
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

// Using a stack, push/pop elements onto the stack when an element has a matching other half
// Keeping track of a substring along the way
// Once the stack is empty, add the substring to collection 

function removeParens(s) {
    let stack = []
    let currentSubString = ""
    let collection = []

    // Break down into primitive strings "(()())" + "(())" in above example
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(s[i])
            currentSubString += s[i]
        } else if (s[i] === ")") {
            stack.pop()
            currentSubString += s[i]
        }

        if (stack.length === 0) {
            collection.push(currentSubString)
            currentSubString = ""
        }

    }

    let finalString = ""
    console.log(collection)

    // Remove outermost parens
    // substring returns part of a string between two indexes
    for (let i = 0; i < collection.length; i++) {
        finalString += collection[i].substring(1, collection[i].length -1 )
        }

    return finalString
}

removeParens(s)