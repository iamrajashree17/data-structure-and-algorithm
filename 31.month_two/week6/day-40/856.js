/* 856. Score of Parentheses
Given a balanced parentheses string s, return the score of the string.

The score of a balanced parentheses string is based on the following rule:

"()" has score 1.
AB has score A + B, where A and B are balanced parentheses strings.
(A) has score 2 * A, where A is a balanced parentheses string.

Example 1:
Input: s = "()"
Output: 1

Example 2:
Input: s = "(())"
Output: 2

Example 3:
Input: s = "()()"
Output: 2
*/

function scoreOfParentheses(s) {
    let stack = [0];

    for (let c of s) {
        if (c === "(") {
            stack.push(0)
        } else {
            const v = stack.pop();
            const add = v === 0 ? 1 : 2 * v;
            stack[stack.length - 1] += add;
        }
    }
    return stack[0];
}

let s = "()";
console.log(scoreOfParentheses(s));

s = "(())";
console.log(scoreOfParentheses(s));

s = "()()";
console.log(scoreOfParentheses(s));
