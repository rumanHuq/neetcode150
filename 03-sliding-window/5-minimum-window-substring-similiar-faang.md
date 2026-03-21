# FAANG Interview Variations: Minimum Window Substring

**Core Concept**: Sliding window with frequency matching, expand and contract

---

## Question 1: Warm-Up (Google)
**"Find smallest substring containing all characters of t (with duplicates)."**

### JS Clue 1.1
```javascript
// Expand right until window contains all needed chars
// Then contract left to find minimum
```

### JS Clue 1.2
```javascript
// need map: chars needed and their counts
// have counter: how many requirements satisfied
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
  
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (need[char] !== undefined) {
      need[char]--;
      if (need[char] === 0) have++;
    }
    
    while (have === needCount) {
      const window = s.slice(left, right + 1);
      if (!result || window.length < result.length) {
        result = window;
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

## Question 2: Smallest Subsequence of Distinct Characters (Amazon)
**"Return smallest subsequence with all distinct characters."**

### JS Clue 2.1
```javascript
// Like minimum window but for subsequences (order matters)
// Use stack to build result
```

### JS Clue 2.2
```javascript
// If char already in result, skip
// If not in result and can remove larger chars later, remove them
```

### Solution
```javascript
function smallestSubsequence(s) {
  const count = {};
  const inResult = new Set();
  const stack = [];
  
  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }
  
  for (const char of s) {
    count[char]--;
    
    if (inResult.has(char)) continue;
    
    while (stack.length > 0 && 
           stack[stack.length - 1] > char && 
           count[stack[stack.length - 1]] > 0) {
      const removed = stack.pop();
      inResult.delete(removed);
    }
    
    stack.push(char);
    inResult.add(char);
  }
  
  return stack.join('');
}
```

---

## Question 3: Find All Anagrams in String (Microsoft)
**"Find all starting indices of p's anagrams in s."**

### JS Clue 3.1
```javascript
// Fixed window, not minimum
// Compare frequency maps
```

### JS Clue 3.2
```javascript
// Build freq of p
// Slide window, compare
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
    if (matches(pCount, sCount)) {
      result.push(i);
    }
    sCount[s.charCodeAt(i) - 97]--;
    sCount[s.charCodeAt(i + p.length) - 97]++;
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

## Question 4: Minimum Window Subsequence (Uber)
**"Find smallest window of s that contains t as a subsequence."**

### JS Clue 4.1
```javascript
// Unlike minimum window substring (t as substring)
// Here t must appear as subsequence (not necessarily contiguous)
```

### JS Clue 4.2
```javascript
// Two pointers: one through s, one through t
// Find start by matching t[0] in s
// Then find end by matching remaining of t
```

### Solution
```javascript
function minWindowSubsequence(s, t) {
  let result = '';
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[0]) {
      let j = i + 1;
      let k = 1;
      
      while (j < s.length && k < t.length) {
        if (s[j] === t[k]) k++;
        j++;
      }
      
      if (k === t.length) {
        const window = s.slice(i, j);
        if (!result || window.length < result.length) {
          result = window;
        }
      }
    }
  }
  
  return result;
}
```

---

## Question 5: Longest Substring with At Least K Repeating Characters (Meta)
**"Find longest substring where each character appears at least k times."**

### JS Clue 5.1
```javascript
// Divide and conquer approach
// Characters with freq < k can't be in answer
```

### JS Clue 5.2
```javascript
// Split at "bad" characters
// Recursively solve each part
```

### Solution
```javascript
function longestSubstring(s, k) {
  if (s.length < k) return 0;
  
  const freq = {};
  for (const char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  
  const badChars = new Set();
  for (const char of s) {
    if (freq[char] < k) badChars.add(char);
  }
  
  if (badChars.size === 0) return s.length;
  
  let maxLen = 0;
  let left = 0;
  
  for (let right = 0; right <= s.length; right++) {
    if (right === s.length || badChars.has(s[right])) {
      const substr = s.slice(left, right);
      if (substr.length > maxLen) {
        maxLen = Math.max(maxLen, longestSubstring(substr, k));
      }
      left = right + 1;
    }
  }
  
  return maxLen;
}
```

---

## Question 6: Replace Word (Google)
**"Given dictionary, replace words with shortest prefix that exists in dictionary."**

### JS Clue 6.1
```javascript
// For each word, find shortest prefix in dictionary
// Use Trie for efficient prefix lookup
```

### JS Clue 6.2
```javascript
// Build Trie from dictionary
// For each word, search in Trie until find word end
```

### Solution
```javascript
class TrieNode {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

function replaceWords(dictionary, sentence) {
  const root = new TrieNode();
  
  for (const word of dictionary) {
    let node = root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isWord = true;
  }
  
  const result = [];
  const words = sentence.split(' ');
  
  for (const word of words) {
    let node = root;
    let prefix = '';
    let found = false;
    
    for (const char of word) {
      if (!node.children[char] || found) break;
      prefix += char;
      node = node.children[char];
      if (node.isWord) {
        result.push(prefix);
        found = true;
      }
    }
    
    if (!found) result.push(word);
  }
  
  return result.join(' ');
}
```

---

## Key Takeaways

```
┌─────────────────────────────────────────────────────────┐
│          MINIMUM WINDOW SUBSTRING VARIATIONS             │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  CORE PATTERN: Expand right, contract left              │
│                 Track window validity                   │
│                 Update answer when valid                │
│                                                         │
│  VARIATIONS:                                            │
│  1. Basic minimum window (all chars present)            │
│  2. Smallest distinct subsequence (stack-based)          │
│  3. Find all anagrams (fixed window, not minimum)       │
│  4. Minimum window subsequence (subsequence, not sub)    │
│  5. Longest with k freq (divide & conquer)             │
│  6. Replace with prefix (Trie-based)                    │
│                                                         │
│  KEY INSIGHT: "Minimum window" = expand until valid    │
│               then contract while valid, track min      │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Keywords that signal this pattern**: "Minimum window", "Smallest substring", "Contains all", "Cover", "At least"
