/**
 * 567. Permutation in String
 * https://leetcode.com/problems/permutation-in-string/
 * 
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 */
function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;
  
  const need = {};
  for (const c of s1) need[c] = (need[c] || 0) + 1;
  
  let left = 0;
  let matched = 0;
  
  for (let right = 0; right < s2.length; right++) {
    const char = s2[right];
    if (need[char] !== undefined && need[char] > 0) {
      need[char]--;
      matched++;
    }
    
    while (matched === s1.length && right - left + 1 > s1.length) {
      const leftChar = s2[left];
      if (need[leftChar] !== undefined) {
        need[leftChar]++;
        if (need[leftChar] > 0) matched--;
      }
      left++;
    }
    
    if (matched === s1.length) return true;
  }
  return false;
}

export default checkInclusion;
