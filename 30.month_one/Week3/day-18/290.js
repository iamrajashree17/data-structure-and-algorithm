/* 290. Word Pattern

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

Each letter in pattern maps to exactly one unique word in s.
Each unique word in s maps to exactly one letter in pattern.
No two letters map to the same word, and no two words map to the same letter.
 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"

Output: true

Explanation:

The bijection can be established as:

'a' maps to "dog".
'b' maps to "cat".
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"

Output: false

Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"

Output: false
*/

function wordPattern(pattern, s) {
    const words = s.split(' ');

    if (words.length !== pattern.length) return false;

    const mapPW = new Map();
    const mapWP = new Map();

    for (let i = 0; i < words.length; i++) {
        const a = words[i];
        const b = pattern[i];

        console.log(mapPW, mapWP, a, b)
        if(mapPW.has(b) && mapPW.get(b) !== a) return false;
        if(mapWP.has(a) && mapPW.get(a) !== b) return false;

        mapPW.set(b, a);
        mapWP.set(a, b);
    }

    return true;
}

let pattern = "abba", s = "dog cat cat dog"
console.log(wordPattern(pattern, s)) // true

pattern = "abba", s = "dog cat cat fish"
console.log(wordPattern(pattern, s)) // false

pattern = "aaaa", s = "dog cat cat dog"
console.log(wordPattern(pattern, s)) // false

pattern = "abba", s = "dog dog dog dog"
console.log(wordPattern(pattern, s)) // false