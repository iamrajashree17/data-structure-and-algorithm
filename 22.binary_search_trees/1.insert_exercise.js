// Binary Search Tree - insert Exercise
// Write a function on the BinarySearchTree class:

// insert - accepts a value and inserts it into the BST in the correct position.
// The function should return the binary search tree. 

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let node  = new Node(val);

        if (this.root === null) {
            this.root = node;
            return this;
        }

        let current = this.root;
        while(true) {
            if(val === current.val) return undefined;

            if (val < current.val) {
                if (current.left === null) {
                    current.left = node;
                    return this;
                }
                current = current.left;
            } else if(val > current.val) {
                if (current.right === null) {
                    current.right = node;
                    return this;
                }
                current = current.right;
            }
        }
    }
}
 
var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12);
console.log(binarySearchTree.root.val) // 15
console.log(binarySearchTree.root.right.val) // 20
console.log(binarySearchTree.root.left.right.val) // 12

// node 1.insert_exercise.js