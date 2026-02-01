/* 3. Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without duplicate characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

function longestSubstring(s) {
    let best = 0;
    let left = 0;
    const set = new Set();
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++
        }
        set.add(s[right]);
        best = Math.max(best, right - left + 1);
    }

    return best;
}

let s = "abcabcbb"
console.log(longestSubstring(s)); // 3


s = "bbbbb"
console.log(longestSubstring(s)); // 1


s = "pwwkew"
console.log(longestSubstring(s)); // 3