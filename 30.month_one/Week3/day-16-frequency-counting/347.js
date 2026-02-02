/* 347. Top K Frequent Elements
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

Example 3:
Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2
Output: [1,2]
*/

function topKFrequent(nums, k) {
    const freq = new Map();
    let res = [];
    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1)
    }

    const buckets = new Array(nums.length + 1).fill(0).map(() => []);
     
    for (const[num, count] of freq.entries()) {
        buckets[count].push(num)
    }

    for (let i = buckets.length-1; i >=0; i--) {
        for (let num of buckets[i]) {
            res.push(num)
            if (res.length === k) return res;
        }
        
    }

    return res;
}

let nums1 = [1,1,1,2,2,3], k1 = 2; // [1,2]
console.log(topKFrequent(nums1, k1));

let nums2 = [1], k2 = 1; // [1]
console.log(topKFrequent(nums2, k2));

let nums3 = [1,2,1,2,1,2,3,1,3,2], k3 = 2; // [1,2]
console.log(topKFrequent(nums3, k3));

// node 347.js