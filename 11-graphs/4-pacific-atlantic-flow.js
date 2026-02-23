function pacificAtlantic(heights) {
  if (!heights || heights.length === 0) return [];

  const rows = heights.length;
  const cols = heights[0].length;
  const pacific = new Array(rows).fill(null).map(() => new Array(cols).fill(false));
  const atlantic = new Array(rows).fill(null).map(() => new Array(cols).fill(false));

  function dfs(r, c, visited, prevHeight) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c] || heights[r][c] < prevHeight) {
      return;
    }
    visited[r][c] = true;
    dfs(r + 1, c, visited, heights[r][c]);
    dfs(r - 1, c, visited, heights[r][c]);
    dfs(r, c + 1, visited, heights[r][c]);
    dfs(r, c - 1, visited, heights[r][c]);
  }

  for (let c = 0; c < cols; c++) {
    dfs(0, c, pacific, 0);
    dfs(rows - 1, c, atlantic, 0);
  }

  for (let r = 0; r < rows; r++) {
    dfs(r, 0, pacific, 0);
    dfs(r, cols - 1, atlantic, 0);
  }

  const result = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (pacific[r][c] && atlantic[r][c]) {
        result.push([r, c]);
      }
    }
  }

  return result;
}

export default pacificAtlantic;
