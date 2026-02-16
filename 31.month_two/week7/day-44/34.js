/* 34. Find First and Last Position of Element in Sorted Array
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:
Input: nums = [], target = 0
Output: [-1,-1]
*/

function searchRange(nums, target) {
    let first = lowerBound(nums, target);
    let last = upperBound(nums, target) - 1;
   
    if (first <= last && nums[first] === target) {
        return [first, last];
    }  
    return [-1, -1];
}

function lowerBound(nums, target) {
    let left = 0;
    let right = nums.length;

    while(left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}
function upperBound(nums, target) {
    let left = 0;
    let right = nums.length;

    while(left < right) {
        let mid = Math.floor((left + right) / 2);

        if(nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

let nums = [5,7,7,8,8,10], target = 8
console.log(searchRange(nums, target));

nums = [5,7,7,8,8,10], target = 6
console.log(searchRange(nums, target));

nums = [], target = 0
console.log(searchRange(nums, target));