# FAANG Interview Variations: Permutation in String

**Core Concept**: Fixed-size sliding window with frequency matching

---

## Question 1: Warm-Up (Google)
**"Given two strings, check if one is a permutation of the other."**

### JS Clue 1.1
```javascript
// Permutation = same characters, same frequencies
// Count frequencies and compare
```

### JS Clue 1.2
```javascript
// Count all chars in s1
// Check if s2 has same counts
```

### Solution
```javascript
function checkPermutation(s1, s2) {
  if (s1.length !== s2.length) return false;
  
  const count = {};
  for (const char of s1) {
    count[char] = (count[char] || 0) + 1;
  }
  
  for (const char of s2) {
    if (!count[char]) return false;
    count[char]--;
  }
  
  return true;
}
```

---

## Question 2: Find All Anagrams in String (Amazon)
**"Find all starting indices of p's anagrams in s."**

### JS Clue 2.1
```javascript
// Sliding window of size |p|
// Compare frequency maps
```

### JS Clue 2.2
```javascript
// Build freq of p
// Slide window in s, update freq, compare
// If match, record index
```

### Solution
```javascript
function findAnagrams(s, p) {
  if (s.length < p.length) return [];
  
  const pCount = new Array(26).fill(0);
  const sCount = new Array(26).fill(0);
  const result = [];
  
  for (let i = 0; i < p.length; i++) {
    pCount[p.charCodeAt(i) - 97]++;
    sCount[s.charCodeAt(i) - 97]++;
  }
  
  for (let i = 0; i <= s.length - p.length; i++) {
    if (matches(sCount, pCount)) {
      result.push(i);
    }
    
    if (i < s.length - p.length) {
      sCount[s.charCodeAt(i) - 97]--;
      sCount[s.charCodeAt(i + p.length) - 97]++;
    }
  }
  
  return result;
}

function matches(a, b) {
  for (let i = 0; i < 26; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
```

---

## Question 3: Minimum Window Substring (Uber)
**"Find smallest window containing all characters of t."**

### JS Clue 3.1
```javascript
// Expand right, add chars to window
// Contract left when window contains all needed chars
// Track minimum window
```

### JS Clue 3.2
```javascript
// Use need map and have counter
// When have === need, try to shrink
```

### Solution
```javascript
function minWindow(s, t) {
  const need = {};
  for (const char of t) {
    need[char] = (need[char] || 0) + 1;
  }
  
  let have = 0;
  let needCount = Object.keys(need).length;
  let left = 0;
  let result = '';
  let minLen = Infinity;
  
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (need[char]) {
      need[char]--;
      if (need[char] === 0) have++;
    }
    
    while (have === needCount) {
      const windowLen = right - left + 1;
      if (windowLen < minLen) {
        minLen = windowLen;
        result = s.slice(left, right + 1);
      }
      
      const leftChar = s[left];
      if (need[leftChar] !== undefined) {
        if (need[leftChar] === 0) have--;
        need[leftChar]++;
      }
      left++;
    }
  }
  
  return result;
}
```

---

## Question 4: Check Inclusion of One String in Another (Microsoft)
**"Return true if s1's permutation is a substring of s2."**

### JS Clue 4.1
```javascript
// Same as finding if any anagram of s1 exists in s2
// Sliding window of size |s1|
```

### JS Clue 4.2
```javascript
// Build freq of s1
// Slide window in s2, compare freqs
```

### Solution
```javascript
function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;
  
  const count = new Array(26).fill(0);
  
  for (let i = 0; i < s1.length; i++) {
    count[s1.charCodeAt(i) - 97]++;
    count[s2.charCodeAt(i) - 97]--;
  }
  
  if (allZero(count)) return true;
  
  let left = 0;
  for (let right = s1.length; right < s2.length; right++) {
    count[s2.charCodeAt(right) - 97]--;
    count[s2.charCodeAt(left) - 97]++;
    
    if (allZero(count)) return true;
    left++;
  }
  
  return false;
}

function allZero(arr) {
  return arr.every(x => x === 0);
}
```

---

## Question 5: Find Permutation (Adobe)
**"Given pattern, find if s is formed by permuting pattern's characters."**

### JS Clue 5.1
```javascript
// Not asking for indices, just if permutation exists
// Same as checkInclusion
```

### JS Clue 5.2
```javascript
// If any window of size |pattern| matches, return true
```

### Solution
```javascript
function hasPermutation(s, pattern) {
  return checkInclusion(pattern, s);
}
```

---

## Question 6: Count Binary Substrings (Apple)
**"Given binary string, count substrings with equal 0s and 1s and 0s come before 1s."**

### JS Clue 6.1
```javascript
// Count consecutive groups
// For groups "00111", answer = min(cnt0, cnt1) = 2
```

### JS Clue 6.2
```javascript
// Track lengths of consecutive same chars
// Sum min(prevLen, currLen) as we iterate
```

### Solution
```javascript
function countBinarySubstrings(s) {
  let result = 0;
  let prevLen = 0;
  let currLen = 1;
  
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      currLen++;
    } else {
      result += Math.min(prevLen, currLen);
      prevLen = currLen;
      currLen = 1;
    }
  }
  
  result += Math.min(prevLen, currLen);
  return result;
}
```

---

## Key Takeaways

```
┌─────────────────────────────────────────────────────────┐
│           PERMUTATION IN STRING VARIATIONS              │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  CORE PATTERN: Fixed-size sliding window               │
│                 Compare frequency maps                  │
│                                                         │
│  VARIATIONS:                                            │
│  1. Check if permutation (compare maps)                  │
│  2. Find all anagrams (slide + compare)                 │
│  3. Minimum window substring (variable size)            │
│  4. Check inclusion (return boolean)                    │
│  5. Find permutation (same as inclusion)               │
│  6. Count binary substrings (group-based counting)     │
│                                                         │
│  KEY INSIGHT: "Match frequencies" is the core          │
│               Fixed window = compare on each slide    │
│               Variable window = expand/contract        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Keywords that signal this pattern**: "Permutation", "Anagram", "Rearrange", "Same characters", "Inclusion"
