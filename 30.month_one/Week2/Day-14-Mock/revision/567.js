/* 567. Permutation in String
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
    const k = s1.length;
    let left = 0;
    const need = new Array(26).fill(0);
    const win = new Array(26).fill(0);

    for(let c of s1) need[c.charCodeAt(0) - 97]++;

    for (let right = 0; right < s2.length; right++) {
        win[s2[right].charCodeAt(0) - 97]++;

        if (right - left + 1 > k) {
            win[s2[left].charCodeAt(0) - 97]--;
            left++;
        }

        if (right - left + 1 === k) {
            if(isSame(win, need)) return true;
        }
    }
    return false;
}

function isSame(a, b) {
    for (let i =0; i < 26; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

let s1 = "ab", s2 = "eidbaooo";
console.log(checkInclusion(s1, s2));

s1 = "ab", s2 = "eidboaoo";
console.log(checkInclusion(s1, s2));