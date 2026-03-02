/* 515. Find Largest Value in Each Tree Row
Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

Example 1:
Input: root = [1,3,2,5,3,null,9]
Output: [1,3,9]

Example 2:
Input: root = [1,2,3]
Output: [1,3]
*/

function largestValues(root) {
    if(!root) return [];

    let queue = [root];
    let result = [];

    while (queue.length) {
        let size = queue.length;
        let max = -Infinity;

        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            max = Math.max(max, Node.val);

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        
        result.push(max)
    }
    return result;
}