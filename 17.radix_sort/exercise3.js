// Radix Sort Helper - mostDigits
// Implement a function called mostDigits  which accepts an array of integers and returns a 
// count of the number of digits for the number in the array with the most digits.

// It may help to use your digitCount  code from the previous exercise in this function.

function getDigitCount(num) {
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigitCount = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigitCount = Math.max(maxDigitCount, getDigitCount(nums[i]))
    }
    return maxDigitCount;
}

console.log(mostDigits([1, 9, 10, 100, 99])); // 3
console.log(mostDigits([100, 1010, 1, 500])); // 4
console.log(mostDigits([0, 100000, 400, 12, 8])); // 6
console.log(mostDigits([])); // 0

// node exercise3.js