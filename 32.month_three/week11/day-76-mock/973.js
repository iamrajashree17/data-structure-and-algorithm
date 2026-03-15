/* 973. K Closest Points to Origin
Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

Example 1:
Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

Example 2:
Input: points = [[3,3],[5,-1],[-2,4]], k = 2
Output: [[3,3],[-2,4]]
Explanation: The answer [[-2,4],[3,3]] would also be accepted.

*/


class MyMaxHeap {
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

            if(this.heap[parent][0] >= this.heap[index][0]) break;

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
            let largest = index;

            if(left < length && this.heap[left][0] > this.heap[largest][0])
                largest = left;
            
            if(right < length && this.heap[right][0] > this.heap[largest][0])
                largest = right;

            if (largest === index) break;

            [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];    
        
            index = largest;
        }
    }
}

function kClosest(points, k) {
    let heap = new MyMaxHeap();

    for (let [x, y] of points) {
        let distance = x*x + y*y;

        heap.push([distance, [x, y]])

        if (heap.size() > k) {
            heap.pop();
        }
    }

    let result = [];
    while(heap.size()) {
        result.push(heap.pop()[1]);
    }
    return result;
}

let points = [[1,3],[-2,2]], k = 1
console.log(kClosest(points, k))

points = [[3,3],[5,-1],[-2,4]], k = 2
console.log(kClosest(points, k))
