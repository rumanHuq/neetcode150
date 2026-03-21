# FAANG Interview Questions: Arrays & Hashing

## Problem Pattern Overview

Arrays and Hashing is the foundation of FAANG interviews. The key skills tested are:
- **Hash map usage** for O(1) lookups
- **Frequency counting** patterns
- **Set theory** for duplicate detection
- **Sorting and ordering** by custom criteria

---

## Question 1: Warm-Up - Contains Duplicate (Leetcode 217)
**"Given an integer array `nums`, return `true` if any value appears at least twice in the array, and `false` if every element is distinct."**

### JS Clue 1.1
```javascript
// What's the simplest way to check for duplicates?
// Think about data structures that can tell us if we've seen something before...
```

### JS Clue 1.2
```javascript
// Option 1: Sort first, then check adjacent elements
// Option 2: Use a Set - if size < length, there are duplicates
// Which is more efficient? Time vs Space tradeoff?
```

### JS Clue 1.3
```javascript
// Complete the solution using Set:
function containsDuplicate(nums) {
  // Your code here
  // Hint: Set.size vs nums.length
}
```

### Solution
```javascript
function containsDuplicate(nums) {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
}
```

### Why This Works
- Set provides O(1) lookup and insertion
- As soon as we find a duplicate, we can return early
- Time: O(n), Space: O(n)

---

## Question 2: Valid Anagram (Leetcode 242)
**"Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise."**

### JS Clue 2.1
```javascript
// What makes two strings anagrams?
// They must have:
// 1. Same length
// 2. Same characters with same frequencies
```

### JS Clue 2.2
```javascript
// Approach 1: Sort both strings and compare
// "anagram".split('').sort().join('') === "nagaram".split('').sort().join('')
// Time: O(n log n)

 // Approach 2: Count frequencies using a hash map
// Time: O(n)
```

### JS Clue 2.3
```javascript
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = {};

  // Count characters in s
  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  // Decrement count for characters in t
  for (const char of t) {
    if (!count[char]) return false;  // char not in s or count is 0
    count[char]--;
  }

  return true;
}
```

### The Frequency Map Pattern
```javascript
// This pattern appears in MANY problems:
// 1. Count frequencies of all elements
// 2. Use counts to validate or group
// 3. Key insight: we only need counts, not the actual strings!
```

---

## Question 3: Two Sum (Leetcode 1)
**"Given an array of integers `nums` and an integer `target`, return the indices of the two numbers that add up to `target`."**

### JS Clue 3.1
```javascript
// Naive approach: O(n²)
// Check every pair - two nested loops

// Better approach: Think backwards
// For each num, what do we need?
// We need: target - num
// Can we find this in O(1)?
```

### JS Clue 3.2
```javascript
// For each element:
// 1. Calculate complement = target - nums[i]
// 2. Check if complement exists in our map
// 3. If yes, we found our pair!
// 4. If no, add current num to map
```

### JS Clue 3.3
```javascript
function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // Check if complement exists
    // If yes, return indices
    // If no, add current number and index to map
  }
}
```

### The Key Insight
```javascript
// Why HashMap over Array?
// - We need O(1) lookup for complement
// - We also need to store the INDEX (not just value)
// - Map preserves index information
```

---

## Question 4: Group Anagrams (Leetcode 49)
**"Given an array of strings `strs`, group the anagrams together. You can return the answer in any order."**

### JS Clue 4.1
```javascript
// Two strings are anagrams if they have the same characters with same frequencies
// How can we use this to create a "key" for grouping?
```

### JS Clue 4.2
```javascript
// Approach 1: Sort each string and use as key
// "eat" -> "aet"
// "tea" -> "aet"
// They map to same key = grouped together!

// Approach 2: Count characters and create a signature
// Using an array of 26 counts as key (for lowercase letters)
```

### JS Clue 4.3
```javascript
function groupAnagrams(strs) {
  const map = new Map();

  for (const str of strs) {
    // Create key - try sorting first
    const key = str.split('').sort().join('');

    // Add to map
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }

  return Array.from(map.values());
}
```

### Why This Works
```javascript
// Key insight: Sorting normalizes anagrams
// "eat", "tea", "ate" all become "aet"
// This becomes the grouping key
```

---

## Question 5: Top K Frequent Elements (Leetcode 347)
**"Given an integer array `nums` and an integer `k`, return the `k` most frequent elements."**

### JS Clue 5.1
```javascript
// Step 1: Count frequency of each element
// Step 2: Order by frequency
// Step 3: Take top k
```

### JS Clue 5.2
```javascript
// Approach 1: Sort all elements by frequency - O(n log n)
// Approach 2: Use a heap (priority queue) - O(n log k)
// Approach 3: Bucket sort by frequency - O(n)
```

### JS Clue 5.3
```javascript
function topKFrequent(nums, k) {
  // Step 1: Count frequencies
  const count = {};
  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  // Step 2: Sort by frequency (descending) and take first k
  // Hint: Use Object.entries() and sort
  
  // Your code here
}
```

### Bucket Sort Approach (Bonus)
```javascript
// Since frequency is between 1 and n, we can bucket by frequency:
// freq[1] = elements with frequency 1
// freq[2] = elements with frequency 2
// ...
// freq[n] = elements with frequency n

function topKFrequentBucketSort(nums, k) {
  const count = {};
  const freq = [];
  const result = [];

  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  for (const [num, cnt] of Object.entries(count)) {
    if (!freq[cnt]) freq[cnt] = [];
    freq[cnt].push(num);
  }

  for (let i = freq.length - 1; i >= 0 && result.length < k; i--) {
    if (freq[i]) result.push(...freq[i]);
  }

  return result;
}
```

---

## Question 6: Product of Array Except Self (Leetcode 238)
**"Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`."**

### JS Clue 6.1
```javascript
// Naive: O(n²) - for each i, multiply all except nums[i]

// Better: Can we do this in O(n)?
// Think about the pattern: [a, b, c, d]
// answer[0] = b * c * d (product of all except index 0)
// answer[1] = a * c * d (product of all except index 1)
```

### JS Clue 6.2
```javascript
// Observation: answer[i] = (product of left side) * (product of right side)
// For each index i:
// leftProduct[i] = nums[0] * nums[1] * ... * nums[i-1]
// rightProduct[i] = nums[i+1] * nums[i+2] * ... * nums[n-1]
// answer[i] = leftProduct[i] * rightProduct[i]
```

### JS Clue 6.3
```javascript
function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n);
  const left = new Array(n);
  const right = new Array(n);

  // Build left products
  left[0] = 1;
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  // Build right products
  right[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  // Combine
  for (let i = 0; i < n; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
}
```

### Space-Optimized Version
```javascript
// Can we do this without extra arrays?
// Hint: Use the result array itself for one of the products

function productExceptSelfOptimized(nums) {
  const n = nums.length;
  const result = new Array(n);

  result[0] = 1;
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  // Now reuse a variable for right product
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] = result[i] * right;
    right = right * nums[i];
  }

  return result;
}
```

---

## Question 7: Valid Sudoku (Leetcode 36)
**"Determine if a 9x9 Sudoku board is valid."**

### JS Clue 7.1
```javascript
// Rules of Sudoku:
// 1. Each row must contain digits 1-9 without repetition
// 2. Each column must contain digits 1-9 without repetition
// 3. Each 3x3 sub-box must contain digits 1-9 without repetition
```

### JS Clue 7.2
```javascript
// We need to track:
// - Which numbers appear in each ROW
// - Which numbers appear in each COLUMN
// - Which numbers appear in each 3x3 BOX
```

### JS Clue 7.3
```javascript
function isValidSudoku(board) {
  // Use Sets for each row, column, and box
  const rows = new Array(9).fill().map(() => new Set());
  const cols = new Array(9).fill().map(() => new Set());
  const boxes = new Array(9).fill().map(() => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = board[i][j];
      if (val === '.') continue;

      // Calculate box index
      // Box index = (row // 3) * 3 + (col // 3)
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      // Check all three conditions
      if (rows[i].has(val)) return false;
      if (cols[j].has(val)) return false;
      if (boxes[boxIndex].has(val)) return false;

      // Add to sets
      rows[i].add(val);
      cols[j].add(val);
      boxes[boxIndex].add(val);
    }
  }

  return true;
}
```

### The Key Insight
```javascript
// Why calculate boxIndex = (i/3)*3 + (j/3)?
//
// Grid layout:
//   j: 0 1 2 | 3 4 5 | 6 7 8
// i:  ------------------
// 0:  box 0 |  1  |  2
// 1:  box 0 |  1  |  2
// 2:  box 0 |  1  |  2
// i:  ------------------
// 3:  box 3 |  4  |  5
// 4:  box 3 |  4  |  5
// 5:  box 3 |  4  |  5
// i:  ------------------
// 6:  box 6 |  7  |  8
// 7:  box 6 |  7  |  8
// 8:  box 6 |  7  |  8
//
// For cell (i, j):
// - Row group: Math.floor(i / 3) * 3 (gives 0, 3, or 6)
// - Col group: Math.floor(j / 3) (gives 0, 1, or 2)
// - Box: row group + col group
```

---

## Question 8: Encode and Decode Strings (Leetcode 271)
**"Design an algorithm to encode a list of strings to a single string and decode it back."**

### JS Clue 8.1
```javascript
// Challenge: How do we separate strings?
// "hello,world" -> ["hello", "world"]
// "hello,world,foo" -> ["hello", "world", "foo"]
// Problem: What if string contains the delimiter?
```

### JS Clue 8.2
```javascript
// Solution: Use length-prefix encoding
// "hello" -> "5#hello"
// "world" -> "5#world"
// Encoded: "5#hello5#world"
//
// Benefits:
// - Unambiguous: we know exactly how long each string is
// - Works with any character including '#'
```

### JS Clue 8.3
```javascript
// ENCODE:
function encode(strs) {
  let result = '';
  for (const str of strs) {
    result += str.length + '#' + str;
  }
  return result;
}

// DECODE:
function decode(str) {
  const result = [];
  let i = 0;

  while (i < str.length) {
    // Find the '#' that marks end of length
    let j = i;
    while (str[j] !== '#') j++;

    // Extract length
    const len = parseInt(str.substring(i, j));

    // Extract string
    const word = str.substring(j + 1, j + 1 + len);
    result.push(word);

    // Move to next
    i = j + 1 + len;
  }

  return result;
}
```

### Why This Works
```javascript
// Length-prefix is used in:
// - Network protocols (TCP)
// - File formats
// - Database storage
// 
// It's unambiguous because we always know where each piece starts and ends
```

---

## Question 9: Longest Consecutive Sequence (Leetcode 128)
**"Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence."**

### JS Clue 9.1
```javascript
// Naive: Sort and count - O(n log n)
// 
// Better: Can we do O(n)?
// Key insight: For any sequence starting at x, the next numbers are x+1, x+2, ...
// How can we efficiently check if x+1 exists?
```

### JS Clue 9.2
```javascript
// Approach:
// 1. Put all numbers in a Set (O(n) space, O(1) lookup)
// 2. For each number, check if it's the START of a sequence
//    (i.e., number - 1 is NOT in the set)
// 3. If it's a start, count how long the sequence is
```

### JS Clue 9.3
```javascript
function longestConsecutive(nums) {
  if (nums.length === 0) return 0;

  const numSet = new Set(nums);
  let longest = 0;

  for (const num of numSet) {
    // Only start counting if this is the beginning of a sequence
    if (!numSet.has(num - 1)) {
      let current = num;
      let streak = 1;

      while (numSet.has(current + 1)) {
        current++;
        streak++;
      }

      longest = Math.max(longest, streak);
    }
  }

  return longest;
}
```

### The Key Insight
```javascript
// Why check num - 1 first?
// If we check every number, we'd do redundant work:
// [1,2,3,4]:
// - Start at 1: count 1,2,3,4 (4 steps)
// - Start at 2: count 2,3,4 (3 steps) - WASTED
// - Start at 3: count 3,4 (2 steps) - WASTED
// - Start at 4: count 4 (1 step) - WASTED
//
// By checking num - 1, we only start at 1:
// - Only start at 1: count 1,2,3,4 (4 steps) - DONE!
```

---

## The Mental Model

```
┌─────────────────────────────────────────────────────────────────┐
│                    ARRAYS & HASHING                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  PATTERN 1: FREQUENCY COUNTING                                 │
│  ────────────────────────────                                   │
│  1. Count frequencies of all elements                           │
│  2. Use counts to validate, group, or rank                      │
│  3. Examples: Valid Anagram, Top K, Group Anagrams              │
│                                                                 │
│  PATTERN 2: COMPLEMENT/MISSING NUMBER                          │
│  ──────────────────────────────────────                         │
│  1. For each element, find what you need (target - num)         │
│  2. Use hash to check if complement exists                      │
│  3. Examples: Two Sum                                           │
│                                                                 │
│  PATTERN 3: SET FOR UNIQUENESS                                  │
│  ───────────────────────────                                    │
│  1. Track seen elements                                         │
│  2. Check for duplicates or membership                          │
│  3. Examples: Contains Duplicate                                │
│                                                                 │
│  PATTERN 4: PREFIX/SUFFIX PRODUCTS                             │
│  ─────────────────────────────────                             │
│  1. Build running product from left                             │
│  2. Build running product from right                            │
│  3. Combine for final answer                                   │
│  4. Examples: Product Except Self                              │
│                                                                 │
│  PATTERN 5: SEQUENCE DETECTION                                 │
│  ───────────────────────────                                    │
│  1. Put all in Set for O(1) lookup                             │
│  2. Find sequence starts (no predecessor)                        │
│  3. Count sequence length                                       │
│  4. Examples: Longest Consecutive Sequence                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Key Takeaways for Interviews

1. **Hash Map is your best friend** - O(1) lookups solve most problems

2. **Frequency counting pattern** - appears in 50% of array problems
   - Count → Sort → Extract
   - Count → Bucket → Extract

3. **Think backwards** - For "find pairs/triples that sum to X":
   - Instead of "which pairs sum to X?", ask "for each element, what do I need?"

4. **When you hear these keywords**, think arrays & hashing:
   - "Duplicate", "Appears twice", "Unique"
   - "Anagram", "Same characters"
   - "Most frequent", "Top k"
   - "Consecutive", "Sequence"
   - "Product of all except"

5. **Time/Space Tradeoffs**:
   - O(n) time often requires O(n) space
   - Sorting can trade time for space
   - Sets and Maps are space-heavy but time-light
