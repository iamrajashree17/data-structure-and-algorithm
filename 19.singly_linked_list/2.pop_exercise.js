// SLL - pop exercise
// Implement the following on the singlyLinkedList.prototype:

// pop

// This function should remove a node at the end of the singlyLinkedList. It should return the node removed.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.length--;
        this.tail = newTail;
        this.tail.next = null;

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        
        return current;
    }
}

var singlyLinkedList = new SinglyLinkedList();
 
console.log(singlyLinkedList.push(5)); // console.log(singlyLinkedList
console.log(singlyLinkedList.length); // 1
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.tail.val); // 5
 
console.log(singlyLinkedList.push(10)); // console.log(singlyLinkedList
console.log(singlyLinkedList.length); // 2
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.head.next.val); // 10
console.log(singlyLinkedList.tail.val); // 10
 
console.log(singlyLinkedList.push(15)); // console.log(singlyLinkedList
console.log(singlyLinkedList.length); // 3
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.head.next.val); // 10
console.log(singlyLinkedList.head.next.next.val); // 15
console.log(singlyLinkedList.tail.val); // 15
 
console.log('pop', singlyLinkedList.pop().val); // 15
console.log(singlyLinkedList.tail.val); // 10
console.log(singlyLinkedList.length); // 2
console.log(singlyLinkedList.pop().val); // 10
console.log(singlyLinkedList.length); // 1
console.log(singlyLinkedList.pop().val); // 5
console.log(singlyLinkedList.length); // 0
console.log(singlyLinkedList.pop()); // undefined
console.log(singlyLinkedList.length); // 0

// node 2.pop_exercise.js