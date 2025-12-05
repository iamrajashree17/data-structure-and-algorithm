function getDigit(num, place) {
    return Math.floor(Math.abs(num)/Math.pow(10, place)) % 10;
}

console.log(getDigit(1234, 1)); // 3

function digitCount(num) {
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

console.log(digitCount(12343)); // 5

function mostDigits(nums) {
    let maxDigitCount = 0;

    for (let i = 0; i < nums.length; i++) {
        maxDigitCount = Math.max(maxDigitCount, digitCount(nums[i]))
    }
    return maxDigitCount;
}

console.log(mostDigits([12,4,5,2,44545,323232,45])) // 6

// node helper.js