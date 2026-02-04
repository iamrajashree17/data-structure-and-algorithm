/* 560. Subarray Sum Equals K
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:
Input: nums = [1,1,1], k = 2
Output: 2

Example 2:
Input: nums = [1,2,3], k = 3
Output: 2
*/

function subarraySum(nums, k) {
    let sum = 0;
    const map = new Map();
    map.set(0, 1);
    let count = 0;

    for (let num of nums) {
        sum += num;

        if (map.has(sum - k)) {
            count += map.get(sum-k);
        }

        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
}


let nums = [1, 1, 1], k = 2;
console.log(subarraySum(nums, k)); // Output: 2

nums = [1, 2, 3], k = 3;
console.log(subarraySum(nums, k)); // Output: 2