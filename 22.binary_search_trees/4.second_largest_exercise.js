// Extra Challenge: Binary Search Tree - findSecondLargest Exercise
// Write a function on the BinarySearchTree class:

// findSecondLargest - finds and returns the second largest value in the BST. 
// If the tree has fewer than two nodes, return undefined.

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

    findSecondLargest() {
        if (!this.root) return undefined;

        // Tree must have at least 2 nodes
        if (!this.root.left && !this.root.right) return undefined;

        let current = this.root;

        while (current) {
            // Case 1: largest has a left subtree
            if (!current.right && current.left) {
            // second largest = max of left subtree
                return this.findLargest(current.left);
            }

            // Case 2: current is the parent of the largest,
            // and the largest has no children
            if (current.right && !current.right.left && !current.right.right) {
                return current.val;
            }

            current = current.right;
        }
    }

    findLargest(node) {
        while (node.right) {
            node = node.right;
        }
        return node.val;
    }
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
console.log(binarySearchTree.findSecondLargest()); // returns 15
 
var binarySearchTree2 = new BinarySearchTree();
binarySearchTree2.insert(10);
console.log(binarySearchTree2.findSecondLargest()); // returns undefined

// node 4.second_largest_exercise.js