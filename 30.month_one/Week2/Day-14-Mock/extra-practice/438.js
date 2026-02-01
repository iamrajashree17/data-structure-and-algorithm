/* 438. Find All Anagrams in a String
Given two strings s and p, 
return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

Example 1:
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:
Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/

function findAnagrams(s, p) {
    if (p.length > s.length) return [];

    const k = p.length;
    const need = new Array(26).fill(0);
    const win = new Array(26).fill(0);
    let res = [];

    for (let c of p) need[c.charCodeAt(0) - 97]++;

    let left = 0;
    for (let right = 0; right < s.length; right++) {
        win[s[right].charCodeAt(0) - 97]++;

        if (right - left + 1 > k) {
            win[s[left].charCodeAt(0) - 97]--;
            left++;
        }

        if (right - left + 1 === k) {
            if (isSame(win, need)) res.push(left);
        }
    }
    return res;
}

function isSame(a, b) {
    for(let i =0; i < 26; i++) {
        if(a[i] !== b[i]) return false;

    }
    return true;
}

let     s1 = "cbaebabacd",
        p1 = "abc"; // [0,6]

let     s2 = "abab",
        p2 = "ab"; // [0,1,2]

console.log(findAnagrams(s1, p1));
console.log(findAnagrams(s2, p2));