class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function countGoodNodes(root) {
  let count = 0;
  
  function dfs(node, maxVal) {
    if (!node) return;
    
    if (node.val >= maxVal) {
      count++;
      maxVal = node.val;
    }
    
    dfs(node.left, maxVal);
    dfs(node.right, maxVal);
  }
  
  dfs(root, root.val);
  return count;
}

export default countGoodNodes;
