function longestPalindrome(s) {
  if (s.length < 2) return s;
  
  let start = 0;
  let maxLen = 1;
  
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const len = right - left + 1;
      if (len > maxLen) {
        start = left;
        maxLen = len;
      }
      left--;
      right++;
    }
  }
  
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }
  
  return s.slice(start, start + maxLen);
}

export default longestPalindrome;
