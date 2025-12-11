// Binary Search Tree - find Exercise
// Implement the following function on the BinarySearchTree class.
// insert has been implemented for you to help with testing.

// find

// This function should find a node in a binary tree. 
// It should return the node if found, otherwise return undefined. 
// This should be solved using iteration or recursion. 
// The tests for this method assume that insert has been implemented correctly.


class Node {
    constructor(val) {
        this.value = val;
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
            if(val === current.value) return undefined;

            if (val < current.value) {
                if (current.left === null) {
                    current.left = node;
                    return this;
                }
                current = current.left;
            } else if(val > current.value) {
                if (current.right === null) {
                    current.right = node;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(val) {
        if (this.root === null) return undefined;

        let current = this.root;
        let found = false;

        while(current && !found) {
            if (val < current.value) {
                current = current.left;
            } else if (val > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12);

 
var foundNode = binarySearchTree.find(20);
console.log(foundNode.value) // 20
console.log(foundNode.left) // null
console.log(foundNode.right) // null
var foundNode = binarySearchTree.find(120);
console.log(foundNode) // undefined

// node 2.find_exercise.js