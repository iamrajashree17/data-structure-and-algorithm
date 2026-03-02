/* 103. Binary Tree Zigzag Level Order Traversal
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []
*/

function zigzagLevelOrder(root) {
    if(!root) return [];

    let leftToRight = true;
    let queue = [root];
    let res = [];

    while(queue.length) {
        let size = queue.length;
        let level = [];

        for(let i = 0; i < size; i++ ) {
            let node = queue.shift();
            
            if(leftToRight) {
                level.push(node.val);
            } else {
                level.unshift(node.val)
            }

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        res.push(level);
        leftToRight = !leftToRight;
    }
    return res
}