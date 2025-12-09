// SLL - get Exercise
// Implement the following on the SinglyLinkedList class

// get

// This function should find a node at a specified index in a SinglyLinkedList. It should return the found node.

class Node {
    constructor(val) {
        this.val = val;
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

        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 && index >=this.length) return null;

        let counter = 0;
        let current = this.head;
        while(counter !== index) {
            counter++;
            current = current.next;
        }
        return current;
    }
}

var singlyLinkedList = new SinglyLinkedList();
 
singlyLinkedList.push(5).push(10).push(15).push(20);
console.log(singlyLinkedList.get(0).val) // 5
console.log(singlyLinkedList.get(1).val) // 10
console.log(singlyLinkedList.get(2).val )// 15
console.log(singlyLinkedList.get(3).val) // 20
console.log(singlyLinkedList.get(4)) // null

// node 3.get_exercise.js