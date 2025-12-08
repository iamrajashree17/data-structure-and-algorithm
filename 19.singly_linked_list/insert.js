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

    get(index) {
        if(index < 0 || index >=this.length) return null;

        let counter = 0;
        let current = this.head;

        while (index !== counter) {
            counter++;
            current = current.next;
        }

        return current;
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
        return node;
    }

    unshift(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return node;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);
         
        let node = new Node(val);
        let previousNode = this.get(index - 1);
        let temp =  previousNode.next;
        previousNode.next = node; 
        node.next = temp;
       
        this.length++;
        return true;
    }
}

let list = new SinglyLinkedList();

list.push("Hi")
list.push("Saanvi")
list.push("Rachan")

console.log(list);

console.log(list.insert(0, "First"));
console.log(list.insert(4, "Last"));
console.log(list.insert(1, "Hello"));
console.log(list.insert(-1, "Hello"));
console.log(list.insert(7, "Hello"));
console.log(list);

// node insert.js
