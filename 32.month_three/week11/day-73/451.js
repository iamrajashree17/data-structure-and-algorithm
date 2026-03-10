/* 451. Sort Characters By Frequency
Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.

Example 1:
Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

Example 2:
Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.

Example 3:
Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
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
            let smallest = index;

            if(left < length && this.heap[left][0] > this.heap[smallest][0])
                smallest = left;

            if(right < length && this.heap[right][0] > this.heap[smallest][0])
                smallest = right;

            if(smallest === index) break;

            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];

            index = smallest
        }
    }
}

function frequencySort(s) {
    let map = new Map();

    for (let c of s) {
        map.set(c, (map.get(c) || 0 ) + 1);
    }

    let heap = new MaxHeap();

    for (let [c, freq] of map) heap.push([freq, c]);

    let result = "";

    while(heap.size()) {
        let data = heap.pop();
        result += data[1].repeat(data[0]);
    }
    return result;
}

// let s = "tree";
// console.log(frequencySort(s));

let s = "Aabb"
console.log(frequencySort(s));