// Template
function dfs(root) {
    if(!root) return baseValue;

    let left = dfs(root.left);
    let right = dfs(root.right);

    return something(left, right, root);
}

function maxDepth(root) {
    if(!root) return 0;

    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    return 1 + Math.max(leftDepth, rightDepth);
}

function isSameTree(p, q) {
    if(!p && !q) return true;
    if(!p || !q) return false;

    if(p.val !== q.val) return true;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

function invertTree(root) {
    if(!root) return null;
    
    let left = invertTree(root.left);
    let right = invertTree(root.right);

    root.left = right;
    root.right = left;
    return root;
}

function pathSum(root, targetSum) { 
    if (!root) return false;

    if (!root.left && !root.right) {
        return targetSum === root.val;
    }
    let remaining = targetSum - root.val;
    return pathSum(root.left, remaining) || pathSum(root.right, remaining);
}