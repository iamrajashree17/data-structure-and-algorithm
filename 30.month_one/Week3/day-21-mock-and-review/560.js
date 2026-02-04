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

function subArraySum(nums, k) {

    // declare a variable sum
    // delcare  the map
    // loop the nums and add a sum;
    // add a sum - k into the map, and if exists in the map then add the subarray count

    let sum = 0;
    const map = new Map();
    map.set(0, 1)
    let count = 0;

    for (let num of nums) {
        sum += num;

        if(map.has(sum - k)) count += map.get(sum - k);

        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}

let nums = [1, 1, 1];
let k = 2;
console.log(subArraySum(nums, k));

let nums1 = [1, 2, 3], k1 = 3;
console.log(subArraySum(nums1, k1));
