class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function kthSmallest(root, k) {
  let result = null;
  let count = 0;
  
  function inorder(node) {
    if (!node) return;
    
    inorder(node.left);
    count++;
    if (count === k) {
      result = node.val;
      return;
    }
    inorder(node.right);
  }
  
  inorder(root);
  return result;
}

export default kthSmallest;
