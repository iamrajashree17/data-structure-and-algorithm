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
    if(index < 0 && index<=this.length) return null;
    
    let counter = 0;
    let current = this.head;
    while(counter !== index) {
      counter++;
      current = current.next;
    }
    return current;
  }
  
  shift() {
    if(!this.head) return undefined;
    
    let node = this.head;
    this.head = node.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return node;
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
  
  pop() {
    if(!this.head) return undefined;
    
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
  
  remove(index) {
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();

    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;

    return removed;
  }
}

let list = new SinglyLinkedList();

list.push("Hi")
list.push("Saanvi")
list.push("Rachan");

console.log(list);
console.log(list.remove(-1))
console.log(list.remove(10))
console.log(list.remove(2))
console.log(list);


// node remove.js