/* 101. Symmetric Tree

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
Example 1:
Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:
Input: root = [1,2,2,null,3,null,3]
Output: false

*/

function isSymmetric(root) {
    if(!root) return true;

    return isMirror(root.left, root.right);
}

function isMirror(a, b) {
    if(!a && !b) return true;
    if(!a || !b) return false;
    if(a.val !== b.val) return false;

    return isMirror(a.left, b.right) && isMirror(a.right, b.left);
}