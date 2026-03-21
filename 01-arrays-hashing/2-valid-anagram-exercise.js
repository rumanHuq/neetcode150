/**
 * 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/
 *
 * Given two strings s and t, return true if t is an anagram of s.
 *
 * Hint: Count character frequencies in first string, verify against second
 */
export function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let wordCount = {};

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    wordCount[element] = wordCount[element] === undefined ? 1 : wordCount[element] + 1;
  }

  console.log({ wordCount });

  for (let i = 0; i < t.length; i++) {
    const element = t[i];
    if (wordCount[element] === undefined) return false;
    wordCount[element]--;
  }

  return true;
}
