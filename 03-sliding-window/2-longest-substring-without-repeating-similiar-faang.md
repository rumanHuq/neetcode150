# FAANG Interview Variations: Longest Substring Without Repeating

**Core Concept**: Sliding window with Set, shrink when duplicate found

---

## Question 1: Warm-Up (Google)
**"Find length of longest substring with at most k distinct characters."**

### JS Clue 1.1
```javascript
// Similar to no repeats, but allow k distinct
// Use Map to track character counts
```

### JS Clue 1.2
```javascript
// Expand right, add char to map
// While map.size > k, shrink from left
// Track max length
```

### Solution
```javascript
function lengthOfLongestSubstringKDistinct(s, k) {
  const map = new Map();
  let left = 0;
  let maxLen = 0;
  
  for (let right = 0; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);
    
    while (map.size > k) {
      const char = s[left];
      map.set(char, map.get(char) - 1);
      if (map.get(char) === 0) map.delete(char);
      left++;
    }
    
    maxLen = Math.max(maxLen, right - left + 1);
  }
  
  return maxLen;
}
```

---

## Question 2: Longest Substring with At Least K Repeating Characters (Amazon)
**"Find longest substring where each character appears at least k times."**

### JS Clue 2.1
```javascript
// Different from standard problem
// All characters must have freq >= k
```

### JS Clue 2.2
```javascript
// Divide and conquer approach:
// If a char has freq < k, it can't be in answer
// Split at such characters, solve recursively
```

### Solution
```javascript
function longestSubstring(s, k) {
  if (s.length < k) return 0;
  
  const freq = {};
  for (const char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  
  // Find split characters (freq < k)
  const splitChars = [];
  for (const char of s) {
    if (freq[char] < k) splitChars.push(char);
  }
  
  if (splitChars.length === 0) return s.length;
  
  // Split and recursively find longest
  let maxLen = 0;
  let start = 0;
  
  for (let i = 0; i <= s.length; i++) {
    if (i === s.length || splitChars.includes(s[i])) {
      const substr = s.slice(start, i);
      if (substr.length > maxLen) {
        maxLen = Math.max(maxLen, longestSubstring(substr, k));
      }
      start = i + 1;
    }
  }
  
  return maxLen;
}
```

---

## Question 3: Minimum Size Subarray Sum (Microsoft)
**"Find minimum length subarray with sum >= target."**

### JS Clue 3.1
```javascript
// Sliding window, but for sum instead of unique chars
// Expand while sum < target, shrink while sum >= target
```

### JS Clue 3.2
```javascript
// Track window sum
// When sum >= target, update answer and shrink
```

### Solution
```javascript
function minSubarrayLen(nums, target) {
  let left = 0;
  let sum = 0;
  let minLen = Infinity;
  
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  
  return minLen === Infinity ? 0 : minLen;
}
```

---

## Question 4: Count Number of Substrings with Exactly K Distinct (Uber)
**"Count substrings with exactly k distinct characters."**

### JS Clue 4.1
```javascript
// At most k - at most (k-1) = exactly k
// Use sliding window to count "at most k"
```

### JS Clue 4.2
```javascript
// exactlyK = atMostK - atMost(K-1)
```

### Solution
```javascript
function exactlyKDistinct(s, k) {
  return atMostK(s, k) - atMostK(s, k - 1);
}

function atMostK(s, k) {
  const map = new Map();
  let left = 0;
  let count = 0;
  
  for (let right = 0; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);
    
    while (map.size > k) {
      const char = s[left];
      map.set(char, map.get(char) - 1);
      if (map.get(char) === 0) map.delete(char);
      left++;
    }
    
    count += right - left + 1;
  }
  
  return count;
}
```

---

## Question 5: Substring with Concatenation of All Words (Apple)
**"Find starting indices where concatenation of words (same length) forms the string."**

### JS Clue 5.1
```javascript
// Words are same length
// Find all substrings of length (wordLen * numWords) that use all words exactly once
```

### JS Clue 5.2
```javascript
// For each possible start (0 to wordLen-1), slide by wordLen
// Use hash map to track word counts
```

### Solution
```javascript
function findSubstring(s, words) {
  if (s.length === 0 || words.length === 0) return [];
  
  const wordLen = words[0].length;
  const numWords = words.length;
  const totalLen = wordLen * numWords;
  const result = [];
  
  const wordCount = {};
  for (const word of words) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }
  
  for (let i = 0; i < wordLen; i++) {
    let left = i;
    let count = {};
    let wordsSeen = 0;
    
    for (let j = i; j <= s.length - wordLen; j += wordLen) {
      const word = s.slice(j, j + wordLen);
      
      if (wordCount[word] !== undefined) {
        count[word] = (count[word] || 0) + 1;
        wordsSeen++;
        
        while (count[word] > wordCount[word]) {
          const leftWord = s.slice(left, left + wordLen);
          count[leftWord]--;
          wordsSeen--;
          left += wordLen;
        }
        
        if (wordsSeen === numWords) {
          result.push(left);
          const leftWord = s.slice(left, left + wordLen);
          count[leftWord]--;
          wordsSeen--;
          left += wordLen;
        }
      } else {
        count = {};
        wordsSeen = 0;
        left = j + wordLen;
      }
    }
  }
  
  return result;
}
```

---

## Question 6: Fruit Into Baskets (Meta)
**"You have two baskets. Find longest subarray with at most 2 types of fruits."**

### JS Clue 6.1
```javascript
// Two baskets = at most 2 distinct types
// Same as "longest substring with at most k distinct"
```

### JS Clue 6.2
```javascript
// Sliding window with Map
// Map tracks count of each fruit type
// Shrink when > 2 types
```

### Solution
```javascript
function totalFruit(tree) {
  const map = new Map();
  let left = 0;
  let maxLen = 0;
  
  for (let right = 0; right < tree.length; right++) {
    map.set(tree[right], (map.get(tree[right]) || 0) + 1);
    
    while (map.size > 2) {
      const char = tree[left];
      map.set(char, map.get(char) - 1);
      if (map.get(char) === 0) map.delete(char);
      left++;
    }
    
    maxLen = Math.max(maxLen, right - left + 1);
  }
  
  return maxLen;
}
```

---

## Key Takeaways

```
┌─────────────────────────────────────────────────────────┐
│      LONGEST SUBSTRING WITHOUT REPEATING VARIATIONS     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  CORE PATTERN: Sliding window with HashMap/Set        │
│                 Expand, check condition, shrink        │
│                                                         │
│  VARIATIONS:                                            │
│  1. At most k distinct chars (modify condition)         │
│  2. At least k frequency per char (divide & conquer)    │
│  3. Minimum sum subarray (sum condition)                │
│  4. Exactly k distinct (atMostK - atMostK-1)           │
│  5. Concatenation of words (fixed window size)         │
│  6. Two baskets (k=2)                                  │
│                                                         │
│  KEY INSIGHT: "At most X" -> easy sliding window       │
│               "Exactly X" -> atMostX - atMost(X-1)     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Keywords that signal this pattern**: "Substring", "Without repeating", "At most k", "At least k", "Distinct characters", "Consecutive"
