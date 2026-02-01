/* 209. Minimum Size Subarray Sum
Given an array of positive integers nums and a positive integer target, 
return the minimal length of a subarray whose sum is greater than or equal to target. 
If there is no such subarray, return 0 instead.

Example 1:
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:
Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
*/

function minSubArrayLen(nums, target) {

    // declare variable minLen and set it to Inifinity.
    // declare the sum as 0
    // declare the left variable to 0
    // loop the nums
    // add it to the sum
    // check sum is greater than or equal to target if so update the window and also reduce the window size
    // if minLen is still Infinity return as 0 or return minLen
    
    let minLen = Infinity;
    let sum = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while(sum >= target) {
            minLen = Math.min(minLen, right-left+1);
            
            sum -= nums[left];
            left++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

let target = 7, nums = [2,3,1,2,4,3];
console.log(minSubArrayLen(nums, target)); // 2

target = 4, nums = [1,4,4]
console.log(minSubArrayLen(nums, target)); // 1

target = 11, nums = [1,1,1,1,1,1,1,1]
console.log(minSubArrayLen(nums, target)); // 0