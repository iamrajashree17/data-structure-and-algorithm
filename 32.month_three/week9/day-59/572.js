/* 572. Subtree of Another Tree
Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

Example 1:
Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true

Example 2:
Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false
*/

function isSubtree(root, subRoot) {
    if (!root) return false;
    if (isSame(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) ||
           isSubtree(root.right, subRoot);
}

function isSame(a, b) {
    if(!a && !b) return true;
    if(!a || !b) return false;
    if(a.val !== b.val) return false;

    return isSame(a.left, b.left) && isSame(a.right, b.right);
}