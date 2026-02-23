class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function averageOfLevels(root) {
  if (!root) return [];
  
  const result = [];
  const queue = [root];
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    let sum = 0;
    
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      sum += node.val;
      
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    
    result.push(sum / levelSize);
  }
  
  return result;
}

export default averageOfLevels;
