/* 543. Diameter of Binary Tree
Given the root of a binary tree, return the length of the diameter of the tree.
The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
This path may or may not pass through the root.
The length of a path between two nodes is represented by the number of edges between them.

Example 1:
Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

Example 2:
Input: root = [1,2]
Output: 1
*/

function diameterOfBinaryTree(root) {
    let diameter = 0;

    function dfs(node) {
        if (!node) return 0;

        let left = dfs(node.left);
        let right = dfs(node.right);

        diameter = Math.max(diameter, left + right);

        return 1 + Math.max(left, right);
    }

    dfs(root);
    return diameter;
}

function RootNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

let root = new RootNode(1);
root.left = new RootNode(2);
root.right = new RootNode(3);
root.left.left = new RootNode(4);
root.left.right = new RootNode(5);

console.log(diameterOfBinaryTree(root))

let root2 = new RootNode(1);
root2.left = new RootNode(2);

console.log(diameterOfBinaryTree(root2))
