# FAANG Interview Variations: Group Anagrams

**Core Concept**: Use sorted string or frequency signature as grouping key

---

## Question 1: Warm-Up (Google)
**"Group customer reviews by the words they use, treating reviews with the same word counts as similar."**

### JS Clue 1.1
```javascript
// Reviews with same word frequency distribution
// "great good" vs "good great" -> same group
// This is character-level anagram at WORD level
```

### JS Clue 1.2
```javascript
// Create key: sort words in review
// "great good" -> "good great"
// Both reviews with this pattern group together
```

### Solution
```javascript
function groupSimilarReviews(reviews) {
  const map = new Map();
  
  for (const review of reviews) {
    const words = review.toLowerCase().split(/\s+/);
    const key = words.sort().join(' ');
    
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(review);
  }
  
  return Array.from(map.values());
}
```

---

## Question 2: Find Anagram Mappings (Uber)
**"Given string A and string B, find the index mapping where A[i] is located in B (A is an anagram of B subset)."**

### JS Clue 2.1
```javascript
// B contains all characters of A (in some order)
// Find where each A[i] maps to in B
```

### JS Clue 2.2
```javascript
// Use Map to track indices of B
// For each char in A, get its index from B
// Mark as used to avoid reuse
```

### Solution
```javascript
function anagramMappings(A, B) {
  const indexMap = {};
  
  for (let i = 0; i < B.length; i++) {
    if (!indexMap[B[i]]) indexMap[B[i]] = [];
    indexMap[B[i]].push(i);
  }
  
  const result = [];
  for (const char of A) {
    result.push(indexMap[char].pop());
  }
  
  return result;
}
```

---

## Question 3: Count Anagram Pairs (Amazon)
**"Given a string, count the number of anagram pairs (two substrings that are anagrams of each other)."**

### JS Clue 3.1
```javascript
// For each substring of length k:
// Create signature, count occurrences
// Number of anagram pairs = nC2 for each group
```

### JS Clue 3.2
```javascript
// Sliding window + frequency signature:
// Window of size k slides through string
// Count signature frequencies
// Add nC2 to result
```

### Solution
```javascript
function countAnagramPairs(s, k) {
  const getSignature = (str) => {
    const freq = new Array(26).fill(0);
    for (const char of str) {
      freq[char.charCodeAt(0) - 97]++;
    }
    return freq.join('#');
  };
  
  const count = {};
  let result = 0;
  
  for (let i = 0; i <= s.length - k; i++) {
    const sig = getSignature(s.substring(i, i + k));
    result += count[sig] || 0;
    count[sig] = (count[sig] || 0) + 1;
  }
  
  return result;
}
```

---

## Question 4: Find All Anagrams in String (Facebook)
**"Given string s and string p, find all starting indices of p's anagrams in s."**

### JS Clue 4.1
```javascript
// P's anagram = same character frequencies as P
// Sliding window of size |P| through S
// Compare window signature with P's signature
```

### JS Clue 4.2
```javascript
// Optimize: Use frequency array instead of sorting
// Two windows are anagrams if all freq[i] === 0
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
    
    // Slide window
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

## Question 5: Minimum Swaps to Group Anagrams (Citi)
**"Given an array of strings, find minimum swaps to make all strings in array anagrams of each other."**

### JS Clue 5.1
```javascript
// Pick target signature (sorted form of any string)
// Count how many need to change
// Min swaps = n - maxCount (greedy works here)
```

### JS Clue 5.2
```javascript
// Find most common signature
// Strings with this signature need 0 swaps
// Rest need to be rearranged -> but we count "not matching"
```

### Solution
```javascript
function minSwapsToGroupAnagrams(strs) {
  const signatureCount = {};
  
  for (const str of strs) {
    const sig = str.split('').sort().join('');
    signatureCount[sig] = (signatureCount[sig] || 0) + 1;
  }
  
  const maxCount = Math.max(...Object.values(signatureCount));
  return strs.length - maxCount;
}
```

---

## Question 6: Group Shifted Strings (Airbnb)
**"Group strings where each string can be shifted to match others in the group."**

### JS Clue 6.1
```javascript
// "abc" -> "bcd" (shifted by 1)
// "az" -> "ba" (wrapping shift)
// Create canonical form that accounts for shifts
```

### JS Clue 6.2
```javascript
// Canonical form: store differences between consecutive chars
// "abc" -> "1,1" (b-a=1, c-b=1)
// "bcd" -> "1,1" (c-b=1, d-c=1)
// Same pattern = same group!
```

### Solution
```javascript
function groupShiftedStrings(strs) {
  const map = new Map();
  
  for (const str of strs) {
    const key = getShiftKey(str);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
  }
  
  return Array.from(map.values());
}

function getShiftKey(str) {
  if (str.length <= 1) return '0';
  
  const diffs = [];
  for (let i = 1; i < str.length; i++) {
    let diff = str.charCodeAt(i) - str.charCodeAt(i - 1);
    if (diff < 0) diff += 26; // Handle wrap
    diffs.push(diff);
  }
  
  return diffs.join(',');
}
```

---

## Key Takeaways

```
┌─────────────────────────────────────────────────────────┐
│               GROUP ANAGRAMS VARIATIONS                 │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  CORE PATTERN: Signature as grouping key               │
│                 - Sorted string                         │
│                 - Frequency array                       │
│                 - Relative differences                  │
│                                                         │
│  VARIATIONS:                                            │
│  1. Word-level anagrams (sort words, not chars)        │
│  2. Find index mappings between anagrams               │
│  3. Count anagram pairs in substrings                  │
│  4. Find all anagram positions (sliding window)        │
│  5. Minimum swaps to group                             │
│  6. Shifted string grouping (relative pattern)        │
│                                                         │
│  KEY INSIGHT: Canonical form determines equivalence    │
│               Different problems need different forms  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Keywords that signal this pattern**: "Anagram", "Same characters", "Group together", "Shifted", "Permutation", "Rearrange"
