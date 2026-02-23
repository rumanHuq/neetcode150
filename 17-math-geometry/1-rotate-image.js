/**
 * 48. Rotate Image
 * https://leetcode.com/problems/rotate-image/
 * 
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
 */
function rotate(matrix) {
  const n = matrix.length;
  
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
}

export default rotate;
