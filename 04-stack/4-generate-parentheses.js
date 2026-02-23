/**
 * 22. Generate Parentheses
 * https://leetcode.com/problems/generate-parentheses/
 * 
 * Given n pairs of parentheses, generate a list of all well-formed parentheses.
 */
function generateParenthesis(n) {
  const result = [];
  
  function backtrack(open, close, current) {
    if (open === n && close === n) {
      result.push(current);
      return;
    }
    if (open < n) backtrack(open + 1, close, current + "(");
    if (close < open) backtrack(open, close + 1, current + ")");
  }
  
  backtrack(0, 0, "");
  return result;
}

export default generateParenthesis;
