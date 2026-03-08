/**
 * 36. Valid Sudoku
 * https://leetcode.com/problems/valid-sudoku/
 *
 * Determine if a 9 x 9 Sudoku board is valid.
 */
export function isValidSudoku(board) {
  // BUG FIX: Array(9).fill(new Set()) creates SAME Set for all elements!
  // Must use Array.from to create separate Set instances
  const rows = Array.from({ length: 9 }, () => new Set());
  const columns = Array.from({ length: 9 }, () => new Set());
  const grids = Array.from({ length: 9 }, () => new Set());

  for (let row = 0; row < 9; row++) {
    console.log(`\n=== Processing Row ${row} ===`);
    for (let column = 0; column < 9; column++) {
      const cell = board[row][column];
      console.log(`\n[Row ${row}, Col ${column}] Checking value: "${cell}"`);

      if (cell === ".") {
        console.log(`  -> Skipping empty cell`);
        continue;
      }

      const gridIndex = Math.floor(row / 3) * 3 + Math.floor(column / 3);
      /*
       * BOX INDEX FORMULA EXPLAINED:
       *
       * A 9x9 Sudoku board has 9 boxes (3x3 grid of boxes)
       *
       * Step 1: floor(r / 3) - determines which ROW of boxes (0, 1, or 2)
       * Step 2: floor(c / 3) - determines which COL of boxes (0, 1, or 2)
       * Step 3: Multiply row by 3 and add column to get flat index 0-8
       *
       * Examples:
       *   r=0, c=0 -> floor(0/3)=0, floor(0/3)=0 -> boxIndex = 0*3 + 0 = 0 (top-left box)
       *   r=0, c=4 -> floor(0/3)=0, floor(4/3)=1 -> boxIndex = 0*3 + 1 = 1 (top-middle box)
       *   r=4, c=4 -> floor(4/3)=1, floor(4/3)=1 -> boxIndex = 1*3 + 1 = 4 (center box)
       *   r=8, c=8 -> floor(8/3)=2, floor(8/3)=2 -> boxIndex = 2*3 + 2 = 8 (bottom-right box)
       *
       * Visual mapping:
       *   Box 0 | Box 1 | Box 2
       *   ------+-------+------
       *   Box 3 | Box 4 | Box 5
       *   ------+-------+------
       *   Box 6 | Box 7 | Box 8
       */
      console.log(`  -> Box Index: ${gridIndex} (rowBox=${Math.floor(row/3)}, colBox=${Math.floor(column/3)})`);

      // Visualize current state with console.table
      console.log(`  -> Current state BEFORE adding "${cell}":`);
      console.table({
        row: { [row]: [...rows[row]] },
        col: { [column]: [...columns[column]] },
        box: { [gridIndex]: [...grids[gridIndex]] },
      });

      if (rows[row].has(cell)) {
        console.log(`  -> DUPLICATE found in row ${row}! Value "${cell}" already exists.`);
        return false;
      }
      rows[row].add(cell);

      if (columns[column].has(cell)) {
        console.log(`  -> DUPLICATE found in col ${column}! Value "${cell}" already exists.`);
        return false;
      }
      columns[column].add(cell);

      if (grids[gridIndex].has(cell)) {
        console.log(`  -> DUPLICATE found in box ${gridIndex}! Value "${cell}" already exists.`);
        return false;
      }
      grids[gridIndex].add(cell);

      console.log(`  -> Current state AFTER adding "${cell}":`);
      console.table({
        row: { [row]: [...rows[row]] },
        col: { [column]: [...columns[column]] },
        box: { [gridIndex]: [...grids[gridIndex]] },
      });
    }
  }
  console.log(`\n=== Sudoku is VALID ===`);
  return true;
}

