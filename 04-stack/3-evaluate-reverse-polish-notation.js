/**
 * 150. Evaluate Reverse Polish Notation
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * 
 * Evaluate the expression in Reverse Polish Notation.
 */
function evalRPN(tokens) {
  const stack = [];
  const ops = { '+': (a, b) => a + b, '-': (a, b) => a - b, '*': (a, b) => a * b, '/': (a, b) => Math.trunc(a / b) };
  
  for (const token of tokens) {
    if (token in ops) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(ops[token](a, b));
    } else {
      stack.push(parseInt(token));
    }
  }
  return stack[0];
}

export default evalRPN;
