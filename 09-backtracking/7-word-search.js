function exist(board, word) {
  const rows = board.length;
  const cols = board[0].length;

  function backtrack(row, col, index) {
    if (index === word.length) return true;
    if (row < 0 || row >= rows || col < 0 || col >= cols) return false;
    if (board[row][col] !== word[index]) return false;

    const temp = board[row][col];
    board[row][col] = '#';

    const found = backtrack(row + 1, col, index + 1) ||
                  backtrack(row - 1, col, index + 1) ||
                  backtrack(row, col + 1, index + 1) ||
                  backtrack(row, col - 1, index + 1);

    board[row][col] = temp;
    return found;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (backtrack(i, j, 0)) return true;
    }
  }

  return false;
}

export default exist;
