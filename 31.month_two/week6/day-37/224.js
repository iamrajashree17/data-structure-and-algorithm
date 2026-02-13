/* 224. Basic Calculator
Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

 

Example 1:
Input: s = "1 + 1"
Output: 2

Example 2:
Input: s = " 2-1 + 2 "
Output: 3

Example 3:
Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23
*/

function calculate(s) {
    let result = 0;
    let sign  = 1;
    let num = 0;
    const numStack = [];

    for (let c of s) {
        if (c >= "0" && c<= "9") {
            num = num * 10 + (c.charCodeAt(0) - 48);
        } else if (c === "+" || c === "-") {
            result += sign * num;
            num = 0;
            sign = (c === "+") ? 1 : -1;
        } else if (c === "(") {
            numStack.push(result);
            numStack.push(sign);

            num = 0;
            result = 0;
            sing = 1;
        } else if (c === ")") {
            result += num * sign;
            num = 0;

            const prevSign = numStack.pop();
            const prevRes = numStack.pop();
            result = prevRes + prevSign * result;
        }
    }

    result += sign * num;
    return result;
}


let s = "1 + 1"
console.log(calculate(s)); // 2

s = " 2-1 + 2 "
console.log(calculate(s)); // 3

s = "(1+(4+5+2)-3)+(6+8)"
console.log(calculate(s)); // 23

