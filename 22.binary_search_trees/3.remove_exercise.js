// Extra Challenge: Binary Search Tree - remove Exercise
// Implement the following function on the BinarySearchTree class. insert is implemented to help with testing.

// remove

// This function should remove a node from a binary search tree.
// Your remove function should be able to handle removal of the root node, 
// removal of a node with one child and removal of a node with two children. 
// The function should return the node removed.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value);
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value);
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  remove(value) {
    let current = this.root;
    let parent = null;

    // 1. Find the node and its parent
    while (current && current.value !== value) {
        parent = current;
        if (value < current.value) {
            current = current.left;
        } else {
            current = current.right;
        }
    }

    // Not found
    if (!current) return undefined;

    const removedNode = current;

    // Helper to replace parent's child pointer (or root) with a new node
    const replaceChild = (parent, oldChild, newChild) => {
        if (!parent) {
            // removing the root
            this.root = newChild;
        } else if (parent.left === oldChild) {
            parent.left = newChild;
        } else if (parent.right === oldChild) {
            parent.right = newChild;
        }
    };

    // 2. Case 1: No children (leaf node)
    if (!current.left && !current.right) {
        replaceChild(parent, current, null);
    }
    // 3. Case 2: One child
    else if (!current.left || !current.right) {
        const child = current.left || current.right;
        replaceChild(parent, current, child);
    }
    // 4. Case 3: Two children
    else {
        // Find in-order successor: smallest node in right subtree
        let succParent = current;
        let succ = current.right;
        while (succ.left) {
            succParent = succ;
            succ = succ.left;
        }

        // Copy successor's value into current node
        current.value = succ.value;

        // Remove successor node from its original position
        // Successor has at most one (right) child
        const succChild = succ.right || null;
        if (succParent.left === succ) {
            succParent.left = succChild;
        } else {
            succParent.right = succChild;
        }
    }

        // NOTE: removedNode may still be the same object in the tree
        // for the two-children case (only its value got overwritten).
        return removedNode;
    }
}

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//     .insert(15)
//     .insert(20)
//     .insert(10)
//     .insert(12)
//     .insert(1)
//     .insert(5)
//     .insert(50);
// binarySearchTree.remove(50);
// console.log(binarySearchTree.root.right.value) // 20
// console.log(binarySearchTree.root.right.right )// null
 
// binarySearchTree.remove(5);
// console.log(binarySearchTree.root.left.left.value) // 1
// console.log(binarySearchTree.root.left.left.right) // null
 
var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50);
 
console.log(binarySearchTree.root.left.left.value) // 5
console.log(binarySearchTree.root.left.left.left) // null
console.log(binarySearchTree.root.left.left.right) // null
 
binarySearchTree.remove(20);
console.log(binarySearchTree.root.right.value) // 50
console.log(binarySearchTree.root.right.right) // null
console.log(binarySearchTree.root.right.left) // null
 
// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//     .insert(15)
//     .insert(20)
//     .insert(10)
//     .insert(12)
//     .insert(1)
//     .insert(5)
//     .insert(50)
//     .insert(60)
//     .insert(30)
//     .insert(25)
//     .insert(23)
//     .insert(24)
//     .insert(70);
 
// binarySearchTree.remove(10);
// console.log(binarySearchTree.root.left.value) // 12
// console.log(binarySearchTree.root.left.left.value) // 1
// console.log(binarySearchTree.root.left.left.right.value) // 5
 
// binarySearchTree.remove(50);
// console.log(binarySearchTree.root.right.value) // 20
// console.log(binarySearchTree.root.right.right.value) // 60
// console.log(binarySearchTree.root.right.right.left.value) // 30
 
// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//     .insert(22)
//     .insert(49)
//     .insert(85)
//     .insert(66)
//     .insert(95)
//     .insert(90)
//     .insert(100)
//     .insert(88)
//     .insert(93)
//     .insert(89)
 
// binarySearchTree.remove(85);
// console.log(binarySearchTree.root.right.right.value) // 88
// console.log(binarySearchTree.root.right.right.right.left.left.value) // 89

// node 3.remove_exercise.js