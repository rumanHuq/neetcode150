/**
 * 76. Minimum Window Substring
 * https://leetcode.com/problems/minimum-window-substring/
 * 
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window.
 */
function minWindow(s, t) {
  if (t.length > s.length) return "";
  
  const need = {};
  for (const c of t) need[c] = (need[c] || 0) + 1;
  
  let have = {};
  let required = Object.keys(need).length;
  let formed = 0;
  let left = 0;
  let minLength = Infinity;
  let minLeft = 0;
  
  for (let right = 0; right < s.length; right++) {
    have[s[right]] = (have[s[right]] || 0) + 1;
    
    if (need[s[right]] && have[s[right]] === need[s[right]]) {
      formed++;
    }
    
    while (formed === required) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minLeft = left;
      }
      
      have[s[left]]--;
      if (need[s[left]] && have[s[left]] < need[s[left]]) {
        formed--;
      }
      left++;
    }
  }
  
  return minLength === Infinity ? "" : s.slice(minLeft, minLeft + minLength);
}

export default minWindow;
