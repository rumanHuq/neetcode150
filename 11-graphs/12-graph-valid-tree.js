function validTree(n, edges) {
  if (edges.length !== n - 1) return false;

  const graph = new Array(n).fill(null).map(() => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited = new Set();
  const queue = [0];
  visited.add(0);

  while (queue.length > 0) {
    const node = queue.shift();
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return visited.size === n;
}

export default validTree;
