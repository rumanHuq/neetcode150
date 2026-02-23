class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isSubtree(s, t) {
  if (!t) return true;
  if (!s) return false;
  
  if (isSameTree(s, t)) return true;
  
  return isSubtree(s.left, t) || isSubtree(s.right, t);
}

function isSameTree(s, t) {
  if (!s && !t) return true;
  if (!s || !t) return false;
  
  return s.val === t.val && 
         isSameTree(s.left, t.left) && 
         isSameTree(s.right, t.right);
}

export default isSubtree;
