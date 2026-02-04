/* 383. Ransom Note
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true

*/

function canConstruct(ransomNote, magazine) {
    const map = new Map();

    for (let ch of magazine) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    for (let c of ransomNote) {
        if(!map.has(c) || map.get(c) === 0) return false;
        map.set(c, map.get(c) - 1);
    }

    return true;

}

let ransomNote = "aa", magazine = "aab"
console.log(canConstruct(ransomNote, magazine)) // true

let ransomNote2 = "a", magazine2 = "b"
console.log(canConstruct(ransomNote2, magazine2)) // false

let ransomNote3 = "aa", magazine3 = "ab"
console.log(canConstruct(ransomNote3, magazine3)) // false