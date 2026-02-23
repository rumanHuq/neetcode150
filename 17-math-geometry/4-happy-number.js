/**
 * 202. Happy Number
 * https://leetcode.com/problems/happy-number/
 * 
 * Write an algorithm to determine if a number n is happy.
 */
function isHappy(n) {
  const getNext = (num) => {
    let sum = 0;
    while (num > 0) {
      const digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  };
  
  const seen = new Set();
  
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = getNext(n);
  }
  
  return n === 1;
}

export default isHappy;
