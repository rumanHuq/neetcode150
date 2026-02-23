/**
 * 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/
 * 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 */
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  
  const count = {};
  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }
  for (const char of t) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
}

export default isAnagram;
