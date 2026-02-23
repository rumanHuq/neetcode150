/**
 * 73. Set Matrix Zeroes
 * https://leetcode.com/problems/set-matrix-zeroes/
 * 
 * Given an m x n integer matrix, if an element is 0, set its entire row and column to 0's.
 */
function setZeroes(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  
  const firstRowZero = matrix[0].includes(0);
  const firstColZero = matrix.some(row => row[0] === 0);
  
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  
  for (let i = 1; i < m; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 1; j < n; j++) {
        matrix[i][j] = 0;
      }
    }
  }
  
  for (let j = 1; j < n; j++) {
    if (matrix[0][j] === 0) {
      for (let i = 1; i < m; i++) {
        matrix[i][j] = 0;
      }
    }
  }
  
  if (firstRowZero) {
    for (let j = 0; j < n; j++) matrix[0][j] = 0;
  }
  
  if (firstColZero) {
    for (let i = 0; i < m; i++) matrix[i][0] = 0;
  }
}

export default setZeroes;
