/* 28. Find the Index of the First Occurrence in a String
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/

function strStr(haystack, needle) {
    return haystack.indexOf(needle);

    // let l = 0;
    // let r = 0;
    // let start = 0;

    // while(l < haystack.length &&  r < needle.length) {
    //     if (haystack[l] === needle[r]) {
    //         l++;
    //         r++;
    //     } else {
    //         r = 0;
    //         l = start + 1;
    //         start++;
    //     }
    // }
    // return r === needle.length ? start : -1;

}

let haystack1 = "sadbutsad", needle1 = "sad"; // 0
console.log(strStr(haystack1, needle1));

let haystack2 = "leetcode", needle2 = "leeto"; // -1
console.log(strStr(haystack2, needle2));

// node 28.js