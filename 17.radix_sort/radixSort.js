function getDigit(num, place) {
    return Math.floor(Math.abs(num)/Math.pow(10, place)) % 10;
}

function getDigitCount(num) {
    return Math.floor(Math.log10(num)) + 1;
}

function mostDigits(nums) {
    let maxDigitCount = 0;
    for(let i = 0; i< nums.length; i++) {
        maxDigitCount = Math.max(maxDigitCount, getDigitCount(nums[i]));
    }
    return maxDigitCount;
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBucket = Array.from({ length: 10 }, () => []);

        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBucket[digit].push(nums[i]);
        }
        nums = [].concat(...digitBucket);
    }

    return nums;
}

console.log(radixSort([1,34,63,75,22,76,25]));
