/**
 * 238. Product of Array Except Self
 * https://leetcode.com/problems/product-of-array-except-self/
 * Solution video: https://www.youtube.com/watch?v=TjFXEUCMqI8
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 */
export function isValidSudoku(board) {

  const rows = Array.from({ length: 9 }, () => new Set());
  const columns = Array.from({ length: 9 }, () => new Set());
  const grids = Array.from({ length: 9 }, () => new Set());

  for (let row = 0; row < 9; row++) {
    for (let column = 0; column < 9; column++) {
      const cell = board[row][column];

      if (cell === ".") continue;

      if (rows[row].has(cell)) return false;
      rows[row].add(row);

      if (columns[column].has(cell)) return false;
      columns[column].add(column);

      const gridIndex = Math.floor(row / 3) * 3 + Math.floor(column / 3);
      if (grids[gridIndex].has(cell)) return false;
      grids[gridIndex].add(cell);
    }

  }

  return true;
}

