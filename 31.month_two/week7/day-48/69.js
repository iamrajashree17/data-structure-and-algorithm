/* 69. Sqrt(x)
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
You must not use any built-in exponent function or operator.
For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

Example 1:
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
*/

function mySqrt(x) {
    let left = 1; 
    let right = x; // 8

    while (left <= right) { // 1 <= 8 // 1 <= 3 // 2 <= 3 // 2 <= 2
        let mid = Math.floor((left + right) / 2); // 4 // 4 // 2

        if(mid * mid <= x) { // 4 * 4 <= 8 // 2 * 2 <= 8 //  4 * 4 <= 8 // 2 * 2 <= 8
            left = mid + 1; // 3 // 2 // 3
        } else {
            right = mid - 1; // 3 // 2
        }
    }

    return right; // 2
}

let x = 4
console.log(mySqrt(x));

x = 8
console.log(mySqrt(x));
