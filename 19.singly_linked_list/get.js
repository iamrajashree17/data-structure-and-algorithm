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

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let i = 0;
        let current = this.head;

        while(i !== index) {
            current = current.next; 
            i++;
        }
        return current;
    }
}

let list = new SinglyLinkedList();

list.push("Hi");
list.push("Saanvi");
list.push("Rachan");

console.log(list);
console.log(list.get(2));


// node get.js