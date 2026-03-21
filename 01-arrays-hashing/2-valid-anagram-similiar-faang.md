# FAANG Interview Variations: Valid Anagram

**Core Concept**: Frequency counting with HashMap to compare character distributions

---

## Question 1: Warm-Up (Google)
**"You have two strings representing gene sequences (only 'A', 'C', 'G', 'T'). Check if one can be rearranged to form the other."**

### JS Clue 1.1
```javascript
// Gene sequence = only 4 possible characters
// Rearrange to form = all anagrams!
// Same concept: count frequencies
```

### JS Clue 1.2
```javascript
// For efficiency with limited alphabet:
// Use array of size 4 instead of HashMap
// Map: A->0, C->1, G->2, T->3
```

### Solution
```javascript
function isGeneAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;
  
  const count = new Array(26).fill(0);
  const aCode = 'A'.charCodeAt(0);
  
  for (const char of s1) {
    count[char.charCodeAt(0) - aCode]++;
  }
  
  for (const char of s2) {
    count[char.charCodeAt(0) - aCode]--;
    if (count[char.charCodeAt(0) - aCode] < 0) return false;
  }
  
  return true;
}
```

---

## Question 2: Ransom Note (Meta)
**"Given a ransom note string and a magazine string, return true if you can construct the ransom note by cutting out letters from the magazine."**

### JS Clue 2.1
```javascript
// Ransom note needs certain letters
// Magazine provides letters
// Can we provide enough of each letter?
// This is like Valid Anagram but with "at least" instead of "exactly"
```

### JS Clue 2.2
```javascript
// Count magazine letters first
// Then check ransom note requirements
// If any requirement > available count -> fail
```

### Solution
```javascript
function canConstruct(ransomNote, magazine) {
  const count = {};
  
  for (const char of magazine) {
    count[char] = (count[char] || 0) + 1;
  }
  
  for (const char of ransomNote) {
    if (!count[char] || count[char] === 0) {
      return false;
    }
    count[char]--;
  }
  
  return true;
}
```

---

## Question 3: Group Products by Category (Amazon)
**"You have a product catalog with category codes. Group products that have the same character distribution in their category code."**

### JS Clue 3.1
```javascript
// Same character distribution = anagram!
// Use frequency signature as grouping key
```

### JS Clue 3.2
```javascript
// Create signature: sort category code
// "BCAA" -> "AABC"
// "CABA" -> "AABC"
// Same signature = same group!
```

### Solution
```javascript
function groupByCategory(products) {
  const map = new Map();
  
  for (const product of products) {
    const signature = product.categoryCode.split('').sort().join('');
    
    if (!map.has(signature)) {
      map.set(signature, []);
    }
    map.get(signature).push(product);
  }
  
  return Array.from(map.values());
}
```

---

## Question 4: Minimum Deletions to Make Anagrams (Spotify)
**"Given two strings, find the minimum number of character deletions to make them anagrams."**

### JS Clue 4.1
```javascript
// To be anagrams, character counts must match
// Current: s1 = "abc", s2 = "def"
// We need to delete: all chars from both (can't add)
```

### JS Clue 4.2
```javascript
// Count frequencies for both strings
// For each character:
// - If count differs, we need to delete the difference
// Sum up all differences
```

### Solution
```javascript
function minDeletionsToAnagram(s1, s2) {
  const count1 = {};
  const count2 = {};
  
  for (const char of s1) count1[char] = (count1[char] || 0) + 1;
  for (const char of s2) count2[char] = (count2[char] || 0) + 1;
  
  let deletions = 0;
  
  for (const char of new Set([...s1, ...s2])) {
    const c1 = count1[char] || 0;
    const c2 = count2[char] || 0;
    deletions += Math.abs(c1 - c2);
  }
  
  return deletions;
}
```

---

## Question 5: Check if Two Strings are Close (Palantir)
**"Two strings are 'close' if you can swap adjacent characters. Check if you can make them equal by any number of moves."**

### JS Clue 5.1
```javascript
// Swapping adjacent = can reorder freely
// Close means: same character set AND same character frequencies
// Unlike anagrams (must be equal), "close" allows any arrangement
```

### JS Clue 5.2
```javascript
// Conditions for "close":
// 1. Same length
// 2. Same character set (after counting unique chars)
// 3. Same character frequencies (after sorting)
```

### Solution
```javascript
function canBeClose(word1, word2) {
  if (word1.length !== word2.length) return false;
  
  const count1 = {};
  const count2 = {};
  
  for (const char of word1) count1[char] = (count1[char] || 0) + 1;
  for (const char of word2) count2[char] = (count2[char] || 0) + 1;
  
  const freq1 = Object.values(count1).sort((a, b) => a - b);
  const freq2 = Object.values(count2).sort((a, b) => a - b);
  
  return JSON.stringify(freq1) === JSON.stringify(freq2);
}
```

---

## Question 6: Distributed Word Count (Twitter)
**"Given two large documents, check if they contain the same words (not necessarily in same order)."**

### JS Clue 6.1
```javascript
// Similar to anagram but for words:
// Split into words, count frequencies
// Compare frequency maps
```

### JS Clue 6.2
```javascript
// Edge cases to consider:
// - Different whitespace
// - Punctuation
// - Case sensitivity
```

### Solution
```javascript
function sameWordFrequency(doc1, doc2) {
  const words1 = doc1.toLowerCase().split(/\s+/);
  const words2 = doc2.toLowerCase().split(/\s+/);
  
  if (words1.length !== words2.length) return false;
  
  const count = {};
  for (const word of words1) {
    count[word] = (count[word] || 0) + 1;
  }
  
  for (const word of words2) {
    if (!count[word]) return false;
    count[word]--;
  }
  
  return true;
}
```

---

## Key Takeaways

```
┌─────────────────────────────────────────────────────────┐
│              VALID ANAGRAM VARIATIONS                   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  CORE PATTERN: Frequency counting with HashMap         │
│                                                         │
│  VARIATIONS:                                            │
│  1. Limited alphabet (genes) - use array for speed     │
│  2. "At least" vs "exactly" (ransom note)              │
│  3. Grouping by signature (anagram groups)              │
│  4. Minimum operations to transform (deletions)        │
│  5. "Close" strings - same freq, any order             │
│  6. Word-level vs character-level anagrams             │
│                                                         │
│  KEY INSIGHT: Frequency signature = sorted frequencies  │
│               determines anagram relationship          │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Keywords that signal this pattern**: "Anagram", "Rearrange", "Reorder", "Same characters", "Frequency match", "Can construct"
