function solveNQueens(n) {
  const result = [];
  const cols = new Set();
  const diag1 = new Set();
  const diag2 = new Set();
  const board = Array(n).fill(null).map(() => Array(n).fill('.'));

  function backtrack(row) {
    if (row === n) {
      result.push(board.map(r => r.join('')));
      return;
    }

    for (let col = 0; col < n; col++) {
      const d1 = row - col;
      const d2 = row + col;

      if (cols.has(col) || diag1.has(d1) || diag2.has(d2)) continue;

      board[row][col] = 'Q';
      cols.add(col);
      diag1.add(d1);
      diag2.add(d2);

      backtrack(row + 1);

      board[row][col] = '.';
      cols.delete(col);
      diag1.delete(d1);
      diag2.delete(d2);
    }
  }

  backtrack(0);
  return result;
}

export default solveNQueens;
