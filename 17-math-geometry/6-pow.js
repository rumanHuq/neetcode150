/**
 * 50. Pow(x, n)
 * https://leetcode.com/problems/powx-n/
 * 
 * Implement pow(x, n), which calculates x raised to the power n.
 */
function myPow(x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  
  const helper = (base, exp) => {
    if (exp === 0) return 1;
    if (exp === 1) return base;
    
    if (exp % 2 === 0) {
      const half = helper(base, exp / 2);
      return half * half;
    } else {
      const half = helper(base, Math.floor(exp / 2));
      return half * half * base;
    }
  };
  
  return helper(x, n);
}

export default myPow;
