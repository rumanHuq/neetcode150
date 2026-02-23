function countSubstrings(s) {
  const n = s.length;
  let count = 0;
  
  for (let i = 0; i < n; i++) {
    let left = i;
    let right = i;
    while (left >= 0 && right < n && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
    
    left = i;
    right = i + 1;
    while (left >= 0 && right < n && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  }
  
  return count;
}

export default countSubstrings;
