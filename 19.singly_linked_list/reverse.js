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

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next; let prev= null;

        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    print() {
        let arr =[];
        let current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }

        return arr;
    }
}

let list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);

console.log(list.print())
console.log(list.reverse())
console.log(list.print())
// node reverse.js