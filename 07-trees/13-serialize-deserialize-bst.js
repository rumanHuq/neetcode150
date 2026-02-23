class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function serialize(root) {
  const result = [];
  
  function preorder(node) {
    if (!node) {
      result.push('null');
      return;
    }
    
    result.push(String(node.val));
    preorder(node.left);
    preorder(node.right);
  }
  
  preorder(root);
  return result.join(',');
}

function deserialize(data) {
  const values = data.split(',');
  let index = 0;
  
  function build() {
    if (values[index] === 'null') {
      index++;
      return null;
    }
    
    const node = new TreeNode(parseInt(values[index]));
    index++;
    node.left = build();
    node.right = build();
    
    return node;
  }
  
  return build();
}

export default { serialize, deserialize };
