/* 219. Contains Duplicate II
Given an integer array nums and an integer k, return true if there are two distinct 
indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
*/

function containsNearbyDuplicate(nums, k) {

    // declare pointer left at 0
    // declare a set to track the duplicates
    // loop nums, if num already exists retrun true 
    // add num to set if rihgt- left > k increase left++
    // in the end return false

    let left = 0;
    let set = new Set();
    for (let right = 0; right < nums.length; right++)  {
        if (set.has(nums[right])) return true;

        set.add(nums[right])
        while ((right - left) >= k) {
            set.delete(nums[left]);
            left++;
        }
 
    }
    return false;

}

let nums = [1,2,3,1], k = 3;
console.log(containsNearbyDuplicate(nums, k)); // true

nums = [1,0,1,1], k = 1;
console.log(containsNearbyDuplicate(nums, k)); // true

nums = [1,2,3,1,2,3], k = 2;
console.log(containsNearbyDuplicate(nums, k)); // false

// node 219.js