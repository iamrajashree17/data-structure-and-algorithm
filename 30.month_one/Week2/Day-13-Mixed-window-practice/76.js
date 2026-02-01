/* 76. Minimum Window Substring
Given two strings s and t of lengths m and n respectively, 
return the minimum window substring of s such that every character in t (including duplicates) is included in the window.
If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
*/

function minWindow(s, t) {
    let need = new Map();

    for (let c of t) {
        need.set(c, (need.get(c) || 0) + 1);
    }

    const required = need.size;
    let left = 0;
    let win = new Map();
    let formed = 0;
    let bestStart = 0;
    let bestLen = Infinity;

    for (let right = 0; right < s.length; right++) {
        let c = s[right];
        win.set(c, (win.get(c) || 0) + 1);

        if (need.has(c) && need.get(c) === win.get(c)) formed++;

        while (formed === required) {
            const len = right - left + 1;
            if (len < bestLen) {
                bestLen = len;
                bestStart = left;
            }

            win.set(s[left], win.get(s[left]) - 1);
            if (win.get(s[left]) === 0) win.delete(s[left]);

            if (need.has(s[left]) && need.get(s[left]) > (win.get(s[left]) || 0)) formed--;
            left++;
        }
    }

    return bestLen === Infinity ? "" : s.slice(bestStart, bestStart + bestLen);

}

let s = "ADOBECODEBANC", t = "ABC";
console.log(minWindow(s, t)); // "BANC"

s = "a", t = "a"
console.log(minWindow(s, t)); // "a"

s = "a", t = "aa"
console.log(minWindow(s, t)); // ""

// node 76.js