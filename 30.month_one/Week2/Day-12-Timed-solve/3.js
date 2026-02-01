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

function lengthOfLongestSubstring(s) {
    let left = 0;
    let set = new Set();
    let best = 0;

    for (let right = 0; right < s.length; right++) {
        let ch = s[right];
        while (set.has(ch)) {
            set.delete(s[left]);
            left++;
        }

        set.add(ch);
        best = Math.max(best, right - left + 1);
    }

    return best;
}

let s1 = "abcabcbb";
console.log(lengthOfLongestSubstring(s1)); // Output: 3

let s2 = "bbbbb";
console.log(lengthOfLongestSubstring(s2)); // Output: 1

let s3 = "pwwkew";
console.log(lengthOfLongestSubstring(s3)); // Output: 3

let s4 = "dvdf";
console.log(lengthOfLongestSubstring(s4)); // Output: 3

// node 3.js
