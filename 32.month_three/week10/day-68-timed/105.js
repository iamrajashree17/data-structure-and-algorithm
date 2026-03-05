/* 105. Construct Binary Tree from Preorder and Inorder Traversal
Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

Example 1:
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

Example 2:
Input: preorder = [-1], inorder = [-1]
Output: [-1]

*/

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function buildTree(preorder, inorder) {
    if(!preorder.length || !inorder.length) return null;

    let rootVal = preorder[0];
    let root = new TreeNode(rootVal);
    let index = inorder.indexOf(rootVal);

    let leftInorder = inorder.slice(0, index);
    let rightInorder = inorder.slice(index + 1);

    let leftPreorder = preorder.slice(1, index + 1);
    let rightPreorder = preorder.slice(index + 1);

    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);

    return root;
}

