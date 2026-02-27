/* 104. Maximum Depth of Binary Tree
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the 
longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2
*/

function maxDepth(root) {
    if (!root) return 0;

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    return 1 + Math.max(left, right);
}

function RootNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

let root = new RootNode(3);
root.left = new RootNode(9);
root.right = new RootNode(20);
root.right.left = new RootNode(15);
root.right.right = new RootNode(7);

console.log(maxDepth(root));
