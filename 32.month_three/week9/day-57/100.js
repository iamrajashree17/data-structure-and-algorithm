/* 100. Same Tree
Given the roots of two binary trees p and q, 
write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, 
and the nodes have the same value.

Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:
Input: p = [1,2,1], q = [1,1,2]
Output: false
*/

function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

function RootNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

let root = new RootNode(1);
root.left = new RootNode(2);
root.right = new RootNode(3);

let root2 = new RootNode(1);
root2.left = new RootNode(2);
root2.right = new RootNode(3);

console.log(isSameTree(root, root2));

root = new RootNode(1);
root.left = new RootNode(2);

root2 = new RootNode(1);
root2.right = new RootNode(2);

console.log(isSameTree(root, root2));
