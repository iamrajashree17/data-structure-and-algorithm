/* 107. Binary Tree Level Order Traversal II
Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[15,7],[9,20],[3]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []
*/

function levelOrderBottom(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while(queue.length) {
        let level = [];
        let size = queue.length;

        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            level.push(node.val);

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        result.push(level);
    }
    return result;
}

