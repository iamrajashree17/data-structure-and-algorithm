/*567. Permutation in String
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.
Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
Input: s1 = "ab", s2 = "eidboaoo"
Output: false
*/

function checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    let k = s1.length;
    let need = new Array(26).fill(0);
    let win = new Array(26).fill(0);

    for (let c of s1) {
        need[c.charCodeAt(0)-97]++;
    }

    let left = 0;
    for (let right = 0; right < s2.length; right++) {
        win[s2[right].charCodeAt(0) - 97]++;

        if (right-left+1 > k) {
            win[s2[left].charCodeAt(0) - 97]--;
            left++;
        }

        if (right-left+1 === k) {
            if (same(need, win)) return true;
        }
        
    }

    return false;
}

function same(a, b) {
    for (let i = 0; i < 26; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

let s1 = "ab", s2 = "eidbaooo";
console.log(checkInclusion(s1, s2)); // Output: true

let s3 = "ab", s4 = "eidboaoo";
console.log(checkInclusion(s3, s4)); // Output: false

// node 567.js