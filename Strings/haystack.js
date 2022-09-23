// Implement strStr() / indexOf()

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example 1
 let haystack = "hello"
 let needle = "lo"
// Output = 2

// Example 2
// let haystack = "aaaa"
// let needle = "bba"
// output = -1

// Example 3
// let haystack = ""
// let needle = ""
// output = 0

// Multiple pointers Solution (looked this one up)
function findNeedle(haystack, needle) {

    if (!needle.length) return 0;
    if (!haystack.length || haystack.length < needle.length) return -1;

    let i = 0
    let j = 0

    while (i <= haystack.length && j <= needle.length) {
        if (haystack.length < i + needle.length) break
        if (haystack[i + j] === needle[j]) {
            j++
        } else {
            i++
            j = 0
        }
        if (j === needle.length) return i
    }
    return -1

}

findNeedle(haystack, needle)