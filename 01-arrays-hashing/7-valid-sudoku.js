/**
 * 36. Valid Sudoku
 * https://leetcode.com/problems/valid-sudoku/
 * 
 * Determine if a 9 x 9 Sudoku board is valid.
 */
function isValidSudoku(board) {
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = board[r][c];
      if (val === ".") continue;
      
      if (rows[r].has(val)) return false;
      rows[r].add(val);
      
      if (cols[c].has(val)) return false;
      cols[c].add(val);
      
      const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      if (boxes[boxIndex].has(val)) return false;
      boxes[boxIndex].add(val);
    }
  }
  return true;
}

export default isValidSudoku;
