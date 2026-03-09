/* 1046. Last Stone Weight
You are given an array of integers stones where stones[i] is the weight of the ith stone.

We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

If x == y, both stones are destroyed, and
If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. If there are no stones left, return 0.

Example 1:
Input: stones = [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

Example 2:
Input: stones = [1]
Output: 1
*/

class MaxHeap {
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
        if(this.heap.length ===1 ) return this.heap.pop();

        let top = this.heap[0];
        this.heap[0] = this.heap.pop();

        this.bubbleDown();
        return top;
    }

    bubbleUp() {
        let index = this.heap.length - 1;

        while(index > 0) {
            let parent = Math.floor((index -  1) / 2);

            if(this.heap[parent] >= this.heap[index]) break;

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

            if(left < length && this.heap[left] > this.heap[largest])
                largest = left;
        
            if(right < length && this.heap[right] > this.heap[largest])
                largest = right;

            if(largest === index) break;

            [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];

            index = largest;
        }
    }
}

function lastStoneWeight(stones) {
    let heap = new MaxHeap();

    for(let stone of stones) {
        heap.push(stone);
    }

    while(heap.size() > 1) {
        let y = heap.pop();
        let x = heap.pop();

        if(x !== y) heap.push(y - x);

    }

    return heap.size() ? heap.pop() : 0
}

let stones = [2,7,4,1,8,1]
console.log(lastStoneWeight(stones));