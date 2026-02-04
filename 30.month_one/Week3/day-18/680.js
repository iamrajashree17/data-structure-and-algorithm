/* 680. Valid Palindrome II
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false

*/



function validPalindrome(s) {
    function isPal(l, r) {
        while(l < r) {
            if(s[l] !== s[r]) return false;

            l++;
            r--;
        }
        return true;
    }

    let l = 0;
    let r = s.length - 1;

    while(l < r) {
        if(s[l] === s[r]) {
            l++;
            r--;
        } else {
            return isPal(l+1, r) || isPal(l, r-1);
        }
    }

    return true;

}

let s = "aba"
console.log(validPalindrome(s))   // Output: true

s = "abca"
console.log(validPalindrome(s))   // Output: true

s = "abc"
console.log(validPalindrome(s))   // Output: false

s = "deeee"
console.log(validPalindrome(s))   // Output: true

s = "cbbcc"
console.log(validPalindrome(s))   // Output: true

s = "abcd"
console.log(validPalindrome(s))   // Output: false

s = "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuclmgmqfvnbgtapekouga"
console.log(validPalindrome(s))   // Output: true