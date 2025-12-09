// Extra Challenge: SLL - rotate Exercise
// Implement the following on the SinglyLinkedList class

// rotate

// This function should rotate all the nodes in the list by some number passed in. 
// For instance, if your list looks like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2, 
// the list should be modified to 3 -> 4 -> 5 -> 1 -> 2. The number passed in to rotate can be any integer.

// Time Complexity: O(N), where N is the length of the list.

// Space Complexity: O(1)

// (Note: push is implemented to help you test your rotate function)
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;   
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    rotate(rotateBy) {
        if (this.length === 0 || this.length === 1) return this;

        let rotation = rotateBy % this.length;
       
        if (rotation < 0) {
            rotation = rotation + this.length; // e.g. -1 on length 5 -> 4 left rotations
        }

        if (rotation === 0) return;

        let newTail = this.head;
        for (let i = 1; i < rotation; i++) {
            newTail = newTail.next;
        }

        let newHead = newTail.next;

        this.tail.next = this.head;

        // Break the circle at newTail
        newTail.next = null;

        // Update head and tail
        this.head = newHead;
        this.tail = newTail;

        return this;
    }
}

var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.tail.val); // 25;
 
console.log(singlyLinkedList.rotate(3));
console.log(singlyLinkedList.head.val); // 20
console.log(singlyLinkedList.head.next.val); // 25
console.log(singlyLinkedList.head.next.next.val); // 5
console.log(singlyLinkedList.head.next.next.next.val); // 10
console.log(singlyLinkedList.head.next.next.next.next.val); // 15
console.log(singlyLinkedList.tail.val); // 15
console.log(singlyLinkedList.tail.next); // null

var singlyLinkedList = new SinglyLinkedList;
console.log(singlyLinkedList.push(5).push(10).push(15).push(20).push(25));
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.tail.val); // 25;
 
console.log(singlyLinkedList.rotate(-1));
console.log(singlyLinkedList.head.val); // 25
console.log(singlyLinkedList.head.next.val); // 5
console.log(singlyLinkedList.head.next.next.val); // 10
console.log(singlyLinkedList.head.next.next.next.val); // 15
console.log(singlyLinkedList.head.next.next.next.next.val); // 20
console.log(singlyLinkedList.tail.val); // 20
console.log(singlyLinkedList.tail.next) // null

var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.tail.val); // 25;
 
console.log(singlyLinkedList.rotate(1000));
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.head.next.val); // 10
console.log(singlyLinkedList.head.next.next.val); // 15
console.log(singlyLinkedList.head.next.next.next.val); // 20
console.log(singlyLinkedList.head.next.next.next.next.val); // 25
console.log(singlyLinkedList.tail.val); // 25
console.log(singlyLinkedList.tail.next) // null

// node 7.rotate_exercise.js