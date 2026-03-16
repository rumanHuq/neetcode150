/**
 * 125. Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 *
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
 *
 * Hint: Use two pointers - one from start, one from end
 */
export function isPalindrome(s) {
  let sanitized = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let leftPointer = 0;
  let rightPointer = sanitized.length - 1;

  while (leftPointer < rightPointer) {
    if (sanitized[leftPointer] !== sanitized[rightPointer]) return false;
    leftPointer++;
    rightPointer--;
  }

  return true;
}
