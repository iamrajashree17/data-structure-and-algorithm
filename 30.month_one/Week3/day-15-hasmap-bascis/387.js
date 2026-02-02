/* 387. First Unique Character in a String
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0
Explanation:
The character 'l' at index 0 is the first character that does not occur at any other index.

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1
*/

function firstUniqChar(s) {
    const freq = new Map();

    for(let ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if(freq.get(s[i]) === 1) return i;
    }
    return -1;
}

let s1 = "leetcode"; // 0
console.log(firstUniqChar(s1));

let s2 = "loveleetcode"; // 2
console.log(firstUniqChar(s2));

let s3 = "aabb"; // -1
console.log(firstUniqChar(s3));

// node 387.js