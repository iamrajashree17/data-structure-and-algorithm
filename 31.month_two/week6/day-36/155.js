/* 155. Min Stack
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
Implement the MinStack class:
MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

Example 1:
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
*/

class MinStack {
    constructor() {
        this.stack = [];
        this.min = Infinity;
    }

    push(val) {
        if (this.stack.length == 0) {
            this.min = val;
        } else if (val <= this.min) {
            this.stack.push(this.min);
            this.min = val;
        }
        this.stack.push(val)
    }

    pop() {
        const pop = this.stack.pop();
        if (pop === this.min) {
            this.min = this.stack.pop();
        }
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.min;
    }
}

// let minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack.getMin());
// console.log(minStack.pop());
// console.log(minStack.top());
// console.log(minStack.getMin());

let minSt = new MinStack();
minSt.push(-2);
minSt.push(0);
minSt.push(-1);
console.log(minSt.getMin());
console.log(minSt.top());
console.log(minSt.pop());
console.log(minSt.getMin());