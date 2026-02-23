/**
 * 54. Spiral Matrix
 * https://leetcode.com/problems/spiral-matrix/
 * 
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 */
function spiralOrder(matrix) {
  const result = [];
  const m = matrix.length;
  const n = matrix[0].length;
  let top = 0, bottom = m - 1;
  let left = 0, right = n - 1;
  
  while (top <= bottom && left <= right) {
    for (let col = left; col <= right; col++) {
      result.push(matrix[top][col]);
    }
    top++;
    
    for (let row = top; row <= bottom; row++) {
      result.push(matrix[row][right]);
    }
    right--;
    
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        result.push(matrix[bottom][col]);
      }
      bottom--;
    }
    
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        result.push(matrix[row][left]);
      }
      left++;
    }
  }
  
  return result;
}

export default spiralOrder;
