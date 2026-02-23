class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function maxPathSum(root) {
  let maxSum = -Infinity;
  
  function dfs(node) {
    if (!node) return 0;
    
    const leftMax = Math.max(dfs(node.left), 0);
    const rightMax = Math.max(dfs(node.right), 0);
    
    const pathSum = node.val + leftMax + rightMax;
    maxSum = Math.max(maxSum, pathSum);
    
    return node.val + Math.max(leftMax, rightMax);
  }
  
  dfs(root);
  return maxSum;
}

export default maxPathSum;
