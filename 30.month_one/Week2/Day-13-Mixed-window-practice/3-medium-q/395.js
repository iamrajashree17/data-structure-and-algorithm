/* 395. Longest Substring with At Least K Repeating Characters
Given a string s and an integer k, return the length of the longest substring of s such that 
the frequency of each character in this substring is greater than or equal to k.
if no such substring exists, return 0.

Example 1:
Input: s = "aaabb", k = 3
Output: 3
Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.

Example 2:
Input: s = "ababbc", k = 2
Output: 5
Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
*/

function longestSubstring(s, k) {
    let ans = 0;

    for (let targetUnique = 1; targetUnique <= 26; targetUnique++) {
        let left = 0; let unique = 0; let atleastK = 0;
        let cnt = new Array(26).fill(0);

        for (let right = 0; right < s.length; right++) {
            const r = s.charCodeAt(right) - 97;
            if (cnt[r] === 0) unique++;
            cnt[r]++;
            if (cnt[r] === k) atleastK++;

            while(unique > targetUnique) {
                const l = s.charCodeAt(left) - 97;
                if(cnt[l] === k) atleastK--
                cnt[l]--;
                if(cnt[l] === 0) unique--; 
                left++
            }

            if (unique === targetUnique && targetUnique === atleastK) {
                ans = Math.max(ans, right - left + 1);
            }
        }
    }

    return ans;
}

let s = "aaabb", k = 3
console.log(longestSubstring(s, k)); // 3

s = "ababbc", k = 2
console.log(longestSubstring(s, k)); // 5
