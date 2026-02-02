/* 451. Sort Characters By Frequency

Given a string s, sort it in decreasing order based on the frequency of the characters.
The frequency of a character is the number of times it appears in the string.
Return the sorted string. If there are multiple answers, return any of them.

Example 1:
Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

Example 2:
Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.

Example 3:
Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
*/

function frequencySort(s) {
    const freq = new Map();

    for (let ch of s) {
        freq.set(ch, (freq.get(ch)|| 0) + 1);
    }
    
    const buckets = new Array(s.length + 1).fill(0).map(() => []);

    for(const[ch, count] of freq.entries()) {
        buckets[count].push(ch);
    }

    let res = "";
    for (let i = buckets.length - 1; i >=0; i--) {
       for (const ch of buckets[i]) {
            res += ch.repeat(i);
       }
    }
    return res;
}

let s1 = "tree"; // "eert"
console.log(frequencySort(s1));

let s2 = "cccaaa"; // "aaaccc"
console.log(frequencySort(s2)); 

let s3 = "Aabb"; // "bbAa"
console.log(frequencySort(s3));

// node 451.js