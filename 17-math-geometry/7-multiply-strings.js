/**
 * 43. Multiply Strings
 * https://leetcode.com/problems/multiply-strings/
 * 
 * Given two non-negative integers num1 and num2 represented as strings.
 */
function multiply(num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";
  
  const m = num1.length;
  const n = num2.length;
  const result = new Array(m + n).fill(0);
  
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const mul = (num1[i] - '0') * (num2[j] - '0');
      const p1 = i + j;
      const p2 = i + j + 1;
      const sum = mul + result[p2];
      
      result[p2] = sum % 10;
      result[p1] += Math.floor(sum / 10);
    }
  }
  
  let i = 0;
  while (i < result.length && result[i] === 0) {
    i++;
  }
  
  const str = result.slice(i).join('');
  return str || "0";
}

export default multiply;
