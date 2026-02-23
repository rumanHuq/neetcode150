/**
 * 66. Plus One
 * https://leetcode.com/problems/plus-one/
 * 
 * You are given a large integer represented as an integer array digits.
 */
function plusOne(digits) {
  const n = digits.length;
  
  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  
  return [1, ...digits];
}

export default plusOne;
