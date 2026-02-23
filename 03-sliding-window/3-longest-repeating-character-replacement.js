/**
 * 424. Longest Repeating Character Replacement
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 * 
 * You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times. Return the length of the longest substring containing the same letter you can get.
 */
function characterReplacement(s, k) {
  const count = {};
  let left = 0;
  let maxCount = 0;
  let maxLength = 0;
  
  for (let right = 0; right < s.length; right++) {
    count[s[right]] = (count[s[right]] || 0) + 1;
    maxCount = Math.max(maxCount, count[s[right]]);
    
    while (right - left + 1 - maxCount > k) {
      count[s[left]]--;
      left++;
    }
    
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

export default characterReplacement;
