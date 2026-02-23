function cloneGraph(node) {
  if (!node) return null;

  const map = new Map();

  function clone(node) {
    if (map.has(node.val)) {
      return map.get(node.val);
    }
    const newNode = { val: node.val, neighbors: [] };
    map.set(node.val, newNode);
    for (const neighbor of node.neighbors) {
      newNode.neighbors.push(clone(neighbor));
    }
    return newNode;
  }

  return clone(node);
}

export default cloneGraph;
