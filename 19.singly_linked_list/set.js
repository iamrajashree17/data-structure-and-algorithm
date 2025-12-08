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
    if(index < 0 || (index >= this.length)) return null;
    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      counter++;
      current = current.next;
    }
    
    return current;
  }
  
   set(index, val) {
    let node = this.get(index);

    if (node) {
        node.val = val;
        return true;
    }
    

    return false;
   }
}

let list = new SinglyLinkedList();

list.push("Hi");
list.push("Saanvi");
list.push("Rachan");
console.log(list);

console.log(list.get(1))
console.log(list.set(1, "Raj"))
console.log(list);

// node set.js