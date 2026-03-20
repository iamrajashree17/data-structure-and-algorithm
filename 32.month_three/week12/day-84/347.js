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
 
class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        if(this.heap.length === 1) return this.heap.pop();

        let top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();

        return top;
    }

    bubbleUp() {
        let index = this.heap.length - 1;

        while(index > 0) {
            let parent = Math.floor((index - 1) / 2);

            if(this.heap[parent][0] <= this.heap[index][0]) break;

            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];

            parent = index;
        }
    }

    bubbleDown() {
        let index = 0;
        let length = this.heap.length;

        while(true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if(left < length && this.heap[left][0] > this.heap[smallest][0]) {
                smallest = left;
            }

            if(right < length && this.heap[right][0] > this.heap[smallest][0]) {
                smallest = right;
            }

            if(smallest === index) break;

            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];

            smallest = index;
        }
    }
}

function topKFrequent(nums, k) {
    let map = new Map();

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    console.log(map)
    let heap = new MinHeap();
    for (let [num, freq] of map) {
        heap.push([freq, num]);

        if(heap.size() > k) {
            heap.pop();
        }
    }

    let result = [];
    while(heap.size()) {
        result.push(heap.pop()[1]);
    }

    return result;
}

let nums = [1,1,1,2,2,3], k = 2
console.log(topKFrequent(nums, k))

nums = [1], k = 1
console.log(topKFrequent(nums, k))

nums = [1,2,1,2,1,2,3,1,3,2], k = 2
console.log(topKFrequent(nums, k))