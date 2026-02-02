/* 169. Majority Element
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/

function majorityElement(nums) {
    let cand = -1;
    let count = 0;

    for (let num of nums) {
        if (count === 0){
            cand = num;
        } 

        count += cand === num ? 1 : -1;
    }

    return cand
}

let nums1 = [3,2,3]; // 3
console.log(majorityElement(nums1));

let nums2 = [2,2,1,1,1,2,2]; // 2
console.log(majorityElement(nums2));

// node 169.js
