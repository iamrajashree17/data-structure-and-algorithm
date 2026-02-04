/* 409. Longest Palindrome
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
*/

function longestPalindrome(s) {
    const map = new Map();
    let length = 0;
    let hasOdd = false;

    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    for(let count of map.values()) {
        
        if(count % 2 === 1) {
            length += count - 1;
            hasOdd = true;
        } else {
            length += count;
        }
    }
    return hasOdd ? length + 1 : length;
}

let s = "abccccdd"
console.log(longestPalindrome(s))   // Output: 7

s = "a"
console.log(longestPalindrome(s))   // Output: 1

s = "bb"
console.log(longestPalindrome(s))   // Output: 2

s = "Aa"
console.log(longestPalindrome(s))   // Output: 1

s = "abc"
console.log(longestPalindrome(s))   // Output: 1

s = "ababa"
console.log(longestPalindrome(s))   // Output: 5