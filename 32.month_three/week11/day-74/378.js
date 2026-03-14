/* 378. Kth Smallest Element in a Sorted Matrix
Given an n x n matrix where each of the rows and columns is sorted in ascending order,
return the kth smallest element in the matrix.
Note that it is the kth smallest element in the sorted order, not the kth distinct element.
You must find a solution with a memory complexity better than O(n2).

Example 1:
Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
Output: 13
Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13

Example 2:
Input: matrix = [[-5]], k = 1
Output: -5
*/

function kthSmallest(matrix , k) {
    let heap = new MyMinHeap();

    for (let i = 0; i < matrix.length; i++) {
        heap.push([matrix[i][0], i, 0]);
    }

    while (k > 1) {
        let [val, r, c] = heap.pop();

        if(c + 1 < matrix[0].length) heap.push([matrix[r][c+1], r, c + 1]);
        k--
    }

    return heap.peek()[0];
}

class MyMinHeap {
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

        let top = this.heap.pop();
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
    }

    bubbleUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);

            if (this.heap[parent].val <= this.heap[index].val) break;

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

            if (left < length && this.heap[left].val < this.heap[smallest].val)
                smallest = left;

            if (right < length && this.heap[right].val < this.heap[smallest].val)
                smallest = right;
            
            if (smallest === index) break;

            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];

            index = smallest;
        }
    }
}
