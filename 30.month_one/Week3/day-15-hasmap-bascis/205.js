/* 205. Isomorphic Strings
Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters.
No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true
Explanation:
The strings s and t can be made identical by:
Mapping 'e' to 'a'.
Mapping 'g' to 'd'.

Example 2:
Input: s = "f11", t = "b23"

Output: false

Explanation:

The strings s and t can not be made identical as '1' needs to be mapped to both '2' and '3'.

Example 3:
Input: s = "paper", t = "title"
Output: true
*/

function isIsomorphic(s, t) {
    const mapST = new Map();
    const mapTS = new Map();

    for (let i = 0; i < s.length; i++) {
        const a = s[i];
        const b = t[i];

        if (mapST.has(a) && mapST.get(a) !== b) return false;
        if (mapTS.has(b) && mapTS.get(b) !== a) return false;
        
        mapST.set(a, b);
        mapTS.set(b, a);
    }
    return true;
}

let s1 = "egg", t1 = "add"; // true
console.log(isIsomorphic(s1, t1));

let s2 = "f11", t2 = "b23"; // false
console.log(isIsomorphic(s2, t2));

let s3 = "paper", t3 = "title"; // true
console.log(isIsomorphic(s3, t3));

// node 205.js