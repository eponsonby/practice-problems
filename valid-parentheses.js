

// Input: s = "()"
// Output: true

// Input: s = "()[]{}"
// Output: True

// Input: s = "(]"
// Output: False

// Input: s = "([)]"
// Output: False

// Input: s = "{[]}"
// Output: True

function validParentheses(s) {

    // use a stack
    // can only push and pop
    // LIFO

    let stack = []
    let guide = {
        '[' : ']',
        '{' : '}',
        '(' : ')'
    }
  
    let keys = Object.keys(guide)

    for (let i = 0; i < s.length; i++) {
        let item = s[i]
        if (stack.length === 0) {
            stack.push(item)
            } else if (item === guide[stack[stack.length - 1]]) {
                stack.pop()
                } else if (keys.includes(item)) {
                    stack.push(item)
            } else {
                console.log(false)
                return false
            }
    }
    
    if (stack.length === 0) {
        console.log(true)
        return true
    }

    console.log("false")
    return false

}

let string = "(])"

validParentheses(string)



// Input: s = "()"
// Output: true

// Input: s = "()[]{}"
// Output: True

// Input: s = "(]"
// Output: False

// Input: s = "([)]"
// Output: False

// Input: s = "{[]}"
// Output: True