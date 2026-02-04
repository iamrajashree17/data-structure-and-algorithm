/* 557. Reverse Words in a String III
Given a string s, reverse the order of characters in each word within a sentence while still
preserving whitespace and initial word order.

Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
Input: s = "Mr Ding"
Output: "rM gniD"
*/

function reverseWordsInPlace(s) {
    return s
            .split(" ")
            .map((word) => word.split("").reverse().join(""))
            .join(" ");

}

let s = "Let's take LeetCode contest";
console.log(reverseWordsInPlace(s)); // "s'teL ekat edoCteeL tsetnoc"

s = "Mr Ding"
console.log(reverseWordsInPlace(s)); // "rM gniD"

// node 557.js