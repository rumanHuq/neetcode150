/**
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Sliding Window Approach:
 * - Expand window with 'right', add character to set
 * - If duplicate found, shrink from 'left' until duplicate is removed
 * - Window is always valid (no duplicates) after the while loop
 *
 * Key Insight: When we find a duplicate at s[right], we know s[left] is that
 * duplicate (or was before it). Removing s[left] is always the correct move
 * to restore window validity.
 *
 * Example: "abcabcbb"
 * - expand to "abc" (no dupes)
 * - see 'a' at position 3, it's in set -> remove 'a' from left, window "bca"
 * - continue expanding, shrink as needed
 */
function lengthOfLongestSubstring(s) {
  const charSet = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

export default lengthOfLongestSubstring;
