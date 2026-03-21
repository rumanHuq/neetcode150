/**
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Hint: Use sliding window with a Set. Expand right, shrink left when duplicate found.
 */
export function lengthOfLongestSubstring(s) {
  const charSet = new Set();
  let left = 0;
  let result = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left += 1;
    }

    charSet.add(s[right]);
    result = Math.max(result, right - left + 1);
  }

  return result;
}

