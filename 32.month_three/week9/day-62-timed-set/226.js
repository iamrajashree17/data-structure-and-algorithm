/* 226. Invert Binary Tree
Given the root of a binary tree, invert the tree, and return its root.

Example 1:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:
Input: root = [2,1,3]
Output: [2,3,1]

Example 3:
Input: root = []
Output: []
*/

function invertTree(root) {
    if (!root) return null;

    let left = invertTree(root.left);
    let right = invertTree(root.right);

    root.left = right;
    root.right = left;

    return root;
}

function RootNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

let root = new RootNode(2);
root.left = new RootNode(1);
root.right = new RootNode(3);

let resRoot = invertTree(root);
console.log(resRoot.val);
console.log(resRoot.left.val)
console.log(resRoot.right.val);
