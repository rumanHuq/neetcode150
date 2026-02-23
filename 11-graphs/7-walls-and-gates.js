function wallsAndGates(rooms) {
  if (!rooms || rooms.length === 0) return;

  const rows = rooms.length;
  const cols = rooms[0].length;
  const queue = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (rooms[r][c] === 0) {
        queue.push([r, c]);
      }
    }
  }

  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const visited = new Array(rows).fill(null).map(() => new Array(cols).fill(false));
  let distance = 0;

  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [r, c] = queue.shift();

      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && 
            !visited[nr][nc] && rooms[nr][nc] !== -1 && rooms[nr][nc] !== 0) {
          visited[nr][nc] = true;
          rooms[nr][nc] = distance + 1;
          queue.push([nr, nc]);
        }
      }
    }
    distance++;
  }
}

export default wallsAndGates;
