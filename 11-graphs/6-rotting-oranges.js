function orangesRotting(grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  const queue = [];
  let fresh = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c, 0]);
      } else if (grid[r][c] === 1) {
        fresh++;
      }
    }
  }

  if (fresh === 0) return 0;

  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let time = 0;

  while (queue.length > 0) {
    const [r, c, t] = queue.shift();
    time = t;

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
        grid[nr][nc] = 2;
        fresh--;
        queue.push([nr, nc, t + 1]);
      }
    }
  }

  return fresh === 0 ? time : -1;
}

export default orangesRotting;
