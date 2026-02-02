/* 242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
*/

function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const freq = new Map();

    for (let ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    for (let ch of t) {
        if (!freq.has(ch)) return false;

        freq.set(ch, freq.get(ch) - 1);
        if (freq.get(ch) === 0) freq.delete(ch);
    }
    return true;
}

let s1 = "anagram", t1 = "nagaram"; // true
console.log(isAnagram(s1, t1));

let s2 = "rat", t2 = "car"; // false
console.log(isAnagram(s2, t2));

// node 242.js
