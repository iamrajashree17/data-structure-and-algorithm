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

            if(this.heap[parent] <= this.heap[index]) break;

            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    bubbleDown() {
        let index = 0;
        let length = this.heap.length;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < length && this.heap[left] < this.heap[smallest])
                smallest = left;
        
            if (right < length && this.heap[right] < this.heap[smallest])
                smallest = right;

            if (smallest === index) break;
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];

            index = smallest;
        }
    }
 }

function kthLargestElement(nums, k) {
    let heap = new MinHeap();

    for(let num of nums) {
        heap.push(num);
        if (heap.size() > k) {
            heap.pop();
        }
    }
    return heap.peek();
}

let nums = [3,2,1,5,6,4], k = 2
console.log(kthLargestElement(nums, k));

nums = [3,2,3,1,2,4,5,5,6], k = 4
console.log(kthLargestElement(nums, k));