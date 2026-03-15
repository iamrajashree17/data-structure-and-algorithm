/* 692. Top K Frequent Words
Given an array of strings words and an integer k, return the k most frequent strings.
Return the answer sorted by the frequency from highest to lowest.
Sort the words with the same frequency by their lexicographical order.

Example 1:
Input: words = ["i","love","leetcode","i","love","coding"], k = 2
Output: ["i","love"]
Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order.

Example 2:
Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
Output: ["the","is","sunny","day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

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

    comparator(a, b) {
        if(a[0] === b[0]) {
            return a[1] > b[1];
        }
        return a[0] < b[0];
    }

    bubbleUp() {
        let index = this.heap.length - 1;

        while(index > 0) {
            let parent = Math.floor((index - 1) / 2);

            if(!this.comparator(this.heap[index], this.heap[parent])) break;

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

            if(left < length && this.comparator(this.heap[left], this.heap[smallest]))
                smallest = left;

            if(right < length && this.comparator(this.heap[right], this.heap[smallest]))
                smallest = right;

            if(smallest === index) break;

            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];

            index = smallest;
        }
    }
}

function topKFreqWords(words, k) {
    let map = new Map();

    for (let word of words) {
        map.set(word, (map.get(word) || 0 ) + 1);
    }

    let heap = new MinHeap();
    for(let [word, freq] of map) {
        heap.push([freq, word]);

        if (heap.size() > k) {
            heap.pop();
        }
    }

    let result = [];
    while(heap.size()) {
        result.push(heap.pop()[1]);
    }

    return result.reverse();

}

let words = ["i","love","leetcode","i","love","coding"], k = 2
console.log(topKFreqWords(words, k));

words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
console.log(topKFreqWords(words, k));