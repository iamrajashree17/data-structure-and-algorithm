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

    const map = new Map();

    for (let c of s) map.set(c, (map.get(c) || 0) + 1);

    for (let c of t) {
        if (!map.has(c)) return false;

        map.set(c, map.get(c) - 1);
        if(map.get(c) === 0) map.delete(c);
    }

    return true;
}


let s1 = "anagram", t1 = "nagaram"; // true
console.log(isAnagram(s1, t1));

let s2 = "rat", t2 = "car"; // false
console.log(isAnagram(s2, t2));

// node 242.js
