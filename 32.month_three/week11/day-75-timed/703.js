/* 703. Kth Largest Element in a Stream
You are part of a university admissions office and need to keep track of the kth highest test score from applicants in real-time. This helps to determine cut-off marks for interviews and admissions dynamically as new applicants submit their scores.

You are tasked to implement a class which, for a given integer k, maintains a stream of test scores and continuously returns the kth highest test score after a new score has been submitted. More specifically, we are looking for the kth highest score in the sorted list of all scores.

Implement the KthLargest class:

KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of test scores nums.
int add(int val) Adds a new test score val to the stream and returns the element representing the kth largest element in the pool of test scores so far.
 

Example 1:

Input:
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]

Output: [null, 4, 5, 5, 8, 8]

Explanation:

KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3); // return 4
kthLargest.add(5); // return 5
kthLargest.add(10); // return 5
kthLargest.add(9); // return 8
kthLargest.add(4); // return 8

Example 2:

Input:
["KthLargest", "add", "add", "add", "add"]
[[4, [7, 7, 7, 7, 8, 3]], [2], [10], [9], [9]]

Output: [null, 7, 7, 7, 8]

Explanation:

KthLargest kthLargest = new KthLargest(4, [7, 7, 7, 7, 8, 3]);
kthLargest.add(2); // return 7
kthLargest.add(10); // return 7
kthLargest.add(9); // return 7
kthLargest.add(9); // return 8
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
        if (this.heap.length === 1) return this.heap.pop();

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

        while(true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if(left < length && this.heap[left] < this.heap[smallest])
                smallest = left;
        
            if(right < length && this.heap[right] < this.heap[smallest])
                smallest = right;

            if(smallest === index) break;

            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];

            index = smallest;
        }
    }
}

class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.heap = new MinHeap();

        for(let num of nums) {
            this.add(num);
        }
    }
    
    add(num) {
        this.heap.push(num);

        if (this.heap.size() > this.k) {
            this.heap.pop();
        }

        return this.heap.peek();
    }
}

kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3)); // return 4
console.log(kthLargest.add(5)); // return 5
console.log(kthLargest.add(10)); // return 5
console.log(kthLargest.add(9)); // return 8
console.log(kthLargest.add(4)); // return 8
