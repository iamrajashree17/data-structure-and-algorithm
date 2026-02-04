/* 125. Valid Palindrome
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
and removing all non-alphanumeric characters, it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

function isValidPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    let l = 0; 
    let r = s.length - 1;

    while(l < r) {
        if(s[l] !== s[r]) return false;

        l++;
        r--;
    }
    return true;
}

function isValidPalindrome1(s) {
   let l = 0;
   let r = s.length -1;

    while (l < r) {
        while (l < r && !isAlphaNUmeric(s[l])) l++;
        while (l < r && !isAlphaNUmeric(s[r])) r--;

        if(s[l].toLowerCase() !== s[r].toLowerCase()) return false;

        l++;
        r--;
    }
    return true;
}

function isAlphaNUmeric(c) {
    return /[a-zA-Z0-9]/.test(c);
}

let s = "A man, a plan, a canal: Panama";
// console.log(isValidPalindrome(s))
console.log(isValidPalindrome1(s))

s = "race a car";
// console.log(isValidPalindrome(s))
console.log(isValidPalindrome1(s))

s = " ";
// console.log(isValidPalindrome(s))
console.log(isValidPalindrome1(s))