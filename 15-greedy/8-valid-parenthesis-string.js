/**
 * 678. Valid Parenthesis String
 * https://leetcode.com/problems/valid-parenthesis-string/
 * 
 * Check if string with * wildcards is valid.
 */
function checkValidString(s) {
  let low = 0;
  let high = 0;

  for (const char of s) {
    if (char === '(') {
      low++;
      high++;
    } else if (char === ')') {
      low = Math.max(low - 1, 0);
      high--;
    } else {
      low = Math.max(low - 1, 0);
      high++;
    }

    if (high < 0) {
      return false;
    }
  }

  return low === 0;
}

export default checkValidString;
