/* 257. Binary Tree Paths
Given the root of a binary tree, return all root-to-leaf paths in any order.
A leaf is a node with no children.

Example 1:
Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]

Example 2:
Input: root = [1]
Output: ["1"]
*/

function binaryTreePaths(root) {
    let res = [];

    function dfs(node, path) {
        if (!node) return;

        path += node.val;
        if (!node.left && !node.right) {
            res.push(path);
            return;
        }
        path += "->";

        dfs(node.left, path);
        dfs(node.right, path);
    }

    dfs(root, "");
    return res;
}


/* Given a Binary Tree, you need to find all the possible paths from the root node to all the leaf nodes of the binary tree.

Note: The paths should be returned such that paths from the left subtree of any node are listed first, followed by paths from the right subtree.

Examples:

Input: root[] = [1, 2, 3, 4, 5, N, N]
ex-3
Output: [[1, 2, 4], [1, 2, 5], [1, 3]]
Explanation: All the possible paths from root node to leaf nodes are: 1 -> 2 -> 4, 1 -> 2 -> 5 and 1 -> 3
Input: root[] = [1, 2, 3]

Output: [[1, 2], [1, 3]] 
Explanation: All the possible paths from root node to leaf nodes are: 1 -> 2 and 1 -> 3
Input: root[] = [10, 20, 30, 40, 60, N, N]

Output: [[10, 20, 40], [10, 20, 60], [10, 30]]
Explanation: All the possible paths from root node to leaf nodes are: 10 -> 20 -> 40, 10 -> 20 -> 60 and 10 -> 30
*/

function pathFromRootToLeaf(root) {
    let res = [];

    function dfs(node, path) {
        if (!root) return;

        path.push(node.data);
        if (!node.left && !node.right) {
            res.push([...path]);
        } else {
            dfs(node.left, path);
            dfs(node.right, path)
        }
        path.pop();
    }
 
    dfs(root, []);
    return res;
}
