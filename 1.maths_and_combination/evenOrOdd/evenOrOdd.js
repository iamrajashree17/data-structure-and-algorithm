
// [Naive Approach] By Finding the Remainder - O(1) Time and O(1) Space
// We can check the remainder when divided by 2. If the remainder is 0, the number is even, otherwise it is odd.


function isEven(n) {

    if(n%2 === 0 ) return true;
    else return false;
}

console.log(isEven(23)); // false
console.log(isEven(20)); // true

// [Efficient Approach] Using Bitwise AND Operator - O(1) Time and O(1) Space
// The last bit of all odd numbers is always 1, while for even numbers it’s 0. 
// So, when performing bitwise AND operation with 1, odd numbers give 1, and even numbers give 0.

// Note: Bitwise operators are extremely fast and efficient because they operate directly at the binary level,
// making them significantly faster than arithmetic or logical operations.

function isEvenEffi(num) {
    return (num & 1) === 0;
}

console.log(isEvenEffi(23)); // false
console.log(isEvenEffi(20)); // true

// node evenOrOdd.js


