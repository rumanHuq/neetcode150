function findRedundantConnection(edges) {
  const parent = new Array(edges.length + 1).fill(0).map((_, i) => i);

  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX === rootY) {
      return false;
    }
    parent[rootX] = rootY;
    return true;
  }

  for (const [u, v] of edges) {
    if (!union(u, v)) {
      return [u, v];
    }
  }

  return [];
}

export default findRedundantConnection;
