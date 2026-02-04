/* 215. Kth Largest Element in an Array
Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.
Can you solve it without sorting?

Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
*/

var findKthLargest = function(nums, k) {
    return nums.sort((a, b) => a - b)[nums.length - k]
};

let nums = [3,2,1,5,6,4], k = 2
console.log(findKthLargest(nums, k)) // 5

nums = [3,2,3,1,2,4,5,5,6], k = 4
console.log(findKthLargest(nums, k)) // 4   