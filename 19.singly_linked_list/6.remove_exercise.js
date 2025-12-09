// SLL - remove Exercise
// Implement the following on the SinglyLinkedList class

// remove

// This function should remove a node at a specified index in a SinglyLinkedList. 
// It should return the removed node. if the index is valid, or undefined if the index is invalid.
// (Note: you don't need to re-implement push, the tests will be provided with it)


class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}

class SinglyLinkedList{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;    
    }
    push(val){
        var newNode = new Node(val);
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
    get(index) {
        if (index >= this.length || index < 0) {
            return null;
        }
        
        cur = this.head;
        var count = 0;
        for (var cur = this.head; cur !== null && count != index; cur = cur.next) {
            count++;
        }
        
        return cur;
    }
    shift() {
        if(!this.head) return undefined;

        let currentNode = this.head;
        this.head = currentNode.next;

        this.length--;
        if(this.length === 0) this.tail = null;

        return currentNode;
    }
    pop() {
        if(!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        while(current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    remove(index){
        if(index < 0 || index >=this.length) return undefined;
        if(index === 0) return !!this.shift();
        if(index === this.length - 1) return !!this.pop();

        let previousNode = this.get(index - 1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;

        return removed;
    }
}

var singlyLinkedList = new SinglyLinkedList;
console.log(singlyLinkedList.push(5).push(10).push(15).push(20));
console.log(singlyLinkedList.remove(2).val); // 15
console.log(singlyLinkedList.remove(100)); // undefined
console.log(singlyLinkedList.length) // 3
console.log(singlyLinkedList.head.val) // 5
console.log(singlyLinkedList.head.next.val) // 10
console.log(singlyLinkedList.head.next.next.val) // 20

// node 6.remove_exercise.js