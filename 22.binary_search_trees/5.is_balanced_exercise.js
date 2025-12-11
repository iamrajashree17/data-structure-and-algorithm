// Extra Challenge: Binary Search Tree - isBalanced Exercise
// Write a function on the BinarySearchTree class:

// isBalanced - returns true if the BST is balanced, otherwise returns false.

// A balanced tree is defined as a tree where the depth of all leaf nodes or nodes with single children differ by no more than one.

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

//     isBalanced() {
//   if (!this.root) return true;
//   if (!this.root.left && !this.root.right) return true;

//   let minDepth = Infinity;
//   let maxDepth = -Infinity;

//   function dfs(node, depth) {
//     if (!node) return;

//     const isLeaf = !node.left && !node.right;
//     const hasSingleChild = (!!node.left) ^ (!!node.right); // XOR

//     if (isLeaf || hasSingleChild) {
//       if (depth < minDepth) minDepth = depth;
//       if (depth > maxDepth) maxDepth = depth;
//     }

//     dfs(node.left, depth + 1);
//     dfs(node.right, depth + 1);
//   }

//   dfs(this.root, 0);
//   return maxDepth - minDepth <= 1;
// }

    isBalanced() {
        if(!this.root) return true;
        if(!this.root.left && !this.root.right) return true;

        let minDepth = Infinity;
        let maxDepth = -Infinity;

        function dfs(node, depth) {
            if(!node) return;
            let isLeafNode = !node.left && !node.right;
            let isSingleChild = (!!node.left) ^ (!!node.right); // XOR

            if (isLeafNode || isSingleChild) {
                if (depth < minDepth) minDepth = depth;
                if (depth > maxDepth) maxDepth = depth;

                // Early exit if already unbalanced
                // if (maxDepth - minDepth > 1) return;
            }
            dfs(node.left, depth + 1);
            // if (maxDepth - minDepth > 1) return;
            dfs(node.right, depth + 1);
        }

        dfs(this.root, 0);
        // if (maxDepth === -Infinity) return true;
        return maxDepth - minDepth <= 1;
    }
}
// const t1 = new BinarySearchTree();
// t1.insert(10);
// t1.insert(5);
// t1.insert(15);
// console.log(t1.isBalanced()); // true
var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);

console.log(binarySearchTree.isBalanced()); // true
 
var binarySearchTree2 = new BinarySearchTree();
binarySearchTree2.insert(5);
console.log(binarySearchTree2.isBalanced()); // true
binarySearchTree2.insert(6);
console.log(binarySearchTree2.isBalanced()); // true
binarySearchTree2.insert(7);
console.log(binarySearchTree2.isBalanced()); // false

// node 5.is_balanced_exercise.js