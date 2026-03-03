/* 106. Construct Binary Tree from Inorder and Postorder Traversal
Given two integer arrays inorder and postorder where inorder is the inorder traversal 
of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

Example 1:
Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
Output: [3,9,20,null,null,15,7]

Example 2:
Input: inorder = [-1], postorder = [-1]
Output: [-1]
*/

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function buildTree(inorder, postorder) {
    if(!inorder.length || postorder.length) return null;

    let rootval = postorder[postorder.length - 1];
    let root = new TreeNode(rootval);

    let index = inorder.indexOf(rootval);

    let leftInorder = inorder.slice(0, index);
    let rightInorder = inorder.slice(index + 1);

    let leftPostorder = postorder.slice(0, index);
    let rightPostorder = postorder.slice(index, postorder.length - 1);

    root.left = buildTree(leftInorder, leftPostorder);
    root.right = buildTree(rightInorder, rightPostorder);

    return root;
}
