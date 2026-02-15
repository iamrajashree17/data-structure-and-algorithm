/* 394. Decode String
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square 
brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces,
square brackets are well-formed, etc. Furthermore, you may assume that the original data 
does not contain any digits and that digits are only for those repeat numbers, k.
For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
*/

function decodeString(s) {
    let countStack = [];
    let strStack = [];

    let num = 0;
    let str = "";

    for (let c of s) {
        if (c >= "0" && c <= "9") {
           num = num * 10 + (c.charCodeAt(0) - 48);
        } else if (c === "[") {
            countStack.push(num);
            strStack.push(str);

            num = 0;
            str = "";
        } else if (c === "]") {
            let k = countStack.pop();
            let prevStr = strStack.pop();

            str = prevStr + str.repeat(k);
        } else {
            str += c;
        }
    }

    return str;
}

let s = "3[a]2[bc]"
console.log(decodeString(s)); // "aaabcbc"

s = "3[a2[c]]"
console.log(decodeString(s)); // "accaccacc"

s = "2[abc]3[cd]ef"
console.log(decodeString(s)); // "abcabccdcdcdef"
