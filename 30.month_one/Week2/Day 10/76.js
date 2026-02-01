/* 76. Minimum Window Substring
Given two strings s and t of lengths m and n respectively, return the minimum window substring of s 
such that every character in t (including duplicates) is included in the window. 
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
    if (t.length > s.length) return "";

    const need = new Map();

    for (let ch of t) {
        need.set(ch, (need.get(ch) || 0) + 1);
    }

    const required = need.size;
    let formed = 0;
    const win = new Map();

    let bestLen = Infinity;
    let bestStart = 0;

    let left = 0;
    for (let right = 0; right < s.length; right++) {
        let ch = s[right];

        win.set(ch, (win.get(ch) || 0) + 1);

        if (need.has(ch) && need.get(ch) === win.get(ch)) formed++;

        while (required === formed) {
            const len = right - left + 1;
            if (len < bestLen) {
                bestLen = len;
                bestStart = left;
            }

            let leftChar = s[left];
            win.set(leftChar, win.get(leftChar) - 1);

            if (need.has(leftChar) && win.get(leftChar) < need.get(leftChar)) {
                formed--;
            }

            left++;
        }
    }

    return bestLen === Infinity ? "" : s.slice(bestStart, bestStart + bestLen);
}

let s1 = "ADOBECODEBANC", t1 = "ABC";
console.log(minWindow(s1, t1)); // Output: "BANC"

let s2 = "a", t2 = "a";
console.log(minWindow(s2, t2)); // Output: "a"

let s3 = "a", t3 = "aa";
console.log(minWindow(s3, t3)); // Output: ""

// node 76.js