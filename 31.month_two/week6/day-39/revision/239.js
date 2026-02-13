/* 239. Sliding Window Maximum
You are given an array of integers nums, there is a sliding window of size k which is
moving from the very left of the array to the very right. You can only see the k numbers in the window. 
Each time the sliding window moves right by one position.
Return the max sliding window.

Example 1:
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

Example 2:
Input: nums = [1], k = 1
Output: [1]
*/

function maxSlidingWindow(nums, k) {
    let dq = [];
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        if (dq.length > 0 && dq[0] <= i - k) {
            dq.shift();
        }

        while (dq.length > 0 && nums[i] >= nums[dq[dq.length - 1]]) {
            dq.pop();
        }
        
        dq.push(i);

        if(i >= k - 1) {
            res.push(nums[dq[0]]);
        }
    }
    return res;
}

let nums = [1,3,-1,-3,5,3,6,7], k = 3
console.log(maxSlidingWindow(nums, k)); // [3,3,5,5,6,7]

nums = [1], k = 1
console.log(maxSlidingWindow(nums, k)); // [ 1 ]
