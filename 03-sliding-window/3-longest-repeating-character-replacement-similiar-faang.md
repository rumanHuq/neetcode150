# FAANG Interview Questions: Longest Repeating Character Replacement

## Problem Pattern Overview

FAANG interviews often test the **sliding window with frequency counting** pattern through variations. The core skill is recognizing when to expand, when to shrink, and how to validate the window.

---

## Question 1: Warm-Up (Easy)
**"Given a binary array `nums` and an integer `k`, find the length of the longest subarray where you can flip at most `k` zeros to ones."**

### JS Clue 1.1
```javascript
// What's the key difference between this and finding longest substring without repeating chars?
// Hint: Instead of Set.has(), think about counting...
```

### JS Clue 1.2
```javascript
// If we track: count of 1s in window, window size
// When is the window valid?
// windowSize - countOfOnes = zeros in window
// If zeros <= k, we can flip them all!
```

### JS Clue 1.3
```javascript
// Complete the solution:
function longestOnes(nums, k) {
  let left = 0;
  let maxLength = 0;
  let zeroCount = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroCount++;

    // When do we need to shrink?
    while (/* fill in: when are zeros more than we can flip? */) {
      if (nums[left] === 0) zeroCount--;
      left++;
    }

    // Window is now valid, update answer
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
```

### Solution
```javascript
function longestOnes(nums, k) {
  let left = 0;
  let maxLength = 0;
  let zeroCount = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroCount++;

    while (zeroCount > k) {
      if (nums[left] === 0) zeroCount--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
```

---

## Question 2: The Leetcode 424 Original
**"You are given a string `s` and an integer `k`. You can choose any character and change it to any other uppercase English character at most `k` times. Return the length of the longest substring where all characters are the same after at most `k` replacements."**

### JS Clue 2.1
```javascript
// How is this different from Question 1?
// - Question 1: Only 2 characters (0 and 1), we know which one to flip
// - Question 2: 26 characters, we DON'T know which to flip
// Think: what if we just tracked the COUNT of the most frequent character?
```

### JS Clue 2.2
```javascript
// Window validity check:
// windowSize - maxCharCount = characters that are NOT the dominant char
// These are exactly the ones we'd need to replace!
// If this <= k, window is valid.
```

### JS Clue 2.3
```javascript
// Complete the solution:
function characterReplacement(s, k) {
  let map = {};        // track count of EACH character
  let maxCount = 0;    // count of most frequent char in current window
  let left = 0;
  let result = 0;

  for (let right = 0; right < s.length; right++) {
    // 1. Expand window - add new char to map
    map[s[right]] = (map[s[right]] || 0) + 1;
    
    // 2. Update maxCount (the tricky part!)
    // What's the key insight here?
    maxCount = Math.max(maxCount, map[s[right]]);

    // 3. Shrink if invalid
    while (/* fill in: windowSize - maxCount > k */) {
      map[s[left]]--;
      left++;
    }

    // 4. Update answer
    result = Math.max(result, right - left + 1);
  }
  return result;
}
```

### The Tricky Insight
```javascript
// Q: Why doesn't maxCount decrease when we shrink the window?
// A: Because a SMALLER window with the same maxCount is still valid (diff <= k)
//    and it won't give us a LONGER answer than what we already found.
//    So keeping maxCount "high" is SAFE - it never hurts us.
```

---

## Question 3: Medium - Anagram Detection Variant
**"Given two strings `s` and `p`, find all windows in `s` that contain an anagram of `p`. Return the starting indices."**

### JS Clue 3.1
```javascript
// What makes two strings anagrams?
// Same characters with same frequencies, just different order!
// So we need to track character FREQUENCIES, not just presence.
```

### JS Clue 3.2
```javascript
// For s = "cbaebabacd" and p = "abc"
// Window size should be p.length (fixed!)
// As we slide, we compare frequency maps.
```

### JS Clue 3.3
```javascript
function findAnagrams(s, p) {
  let result = [];
  let need = {};      // frequency map of characters in p
  let window = {};    // frequency map of current window in s

  // Build need map
  for (let char of p) {
    need[char] = (need[char] || 0) + 1;
  }

  let left = 0;
  let right = 0;
  let valid = 0;  // how many characters have correct frequency

  // Expand and contract pattern
  while (right < s.length) {
    // Add right char to window
    let c = s[right];
    right++;

    // TODO: update window map and valid count
    
    // When window size equals p.length, check if it's an anagram
    while (right - left >= p.length) {
      // Check if all character frequencies match
      if (valid === Object.keys(need).length) {
        result.push(left);
      }

      // Before shrinking, update window
      let d = s[left];
      left++;

      // TODO: update window map and valid count
    }
  }
  return result;
}
```

---

## Question 4: Hard - Longest Subarray with Ones After Deletion
**"Given a binary array, find the length of the longest subarray containing only 1s after deleting one element."**

### JS Clue 4.1
```javascript
// Similar to Q1 but with a twist:
// We MUST delete exactly ONE element (either 0 or 1)
// After deletion, find longest run of 1s
```

### JS Clue 4.2
```javascript
// Think about it differently:
// We're looking for window that contains AT MOST one non-1 (can be 0 or delete)
// OR we can frame it as: longest subarray where 0s <= 1
```

### JS Clue 4.3
```javascript
// Actually, simpler:
// longest run of 1s we can get = (max consecutive 1s to the left) + (max consecutive 1s to the right)
// But that's O(n²) preprocessing...
// 
// Sliding window approach:
// Window contains AT MOST one 0, and we're maximizing (ones in window) + 1
```

---

## Question 5: Hard - Minimum Adjacent Swaps
**"Given an array containing only 1s and 0s, you can only swap adjacent elements. Find minimum swaps to group all 1s together. Given k = number of 1s to group."**

### JS Clue 5.1
```javascript
// If we know WHERE the 1s should go (k consecutive positions)
// We need to find a window of size k that has the MOST 1s already
// Then swap the remaining 0s inside to bring 1s together
// Minimum swaps = k - (max 1s in any window of size k)
```

### JS Clue 5.2
```javascript
// This is like finding the best "target region" for our 1s
// Example: [1, 0, 0, 1, 0, 0, 1], k = 3
// Window [2,4] = [0,1,0] has 1 one, needs 2 swaps
// Window [4,6] = [0,0,1] has 1 one, needs 2 swaps  
// Window [3,5] = [1,0,0] has 1 one, needs 2 swaps
// Actually we need to count zeros, not ones directly...
```

---

## The Mental Model for All These Problems

```
┌─────────────────────────────────────────────────────────┐
│                    SLIDING WINDOW                       │
│                                                         │
│   ┌─────┐                                               │
│   │     │  ← left                                       │
│   └─────┘                                               │
│   ┌───────────────────────────────┐                     │
│   │   Valid Window                │  ← right            │
│   │   (satisfies condition)       │                     │
│   └───────────────────────────────┘                     │
│                                                         │
│   Condition: windowSize - maxFreq <= k                 │
│              (or similar metric)                       │
│                                                         │
│   Strategy:                                            │
│   1. Expand (right++)                                 │
│   2. Update state (counts, maxFreq)                   │
│   3. While invalid: shrink (left++)                   │
│   4. Update answer                                      │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## Key Takeaways for Interviews

1. **Identify the constraint**: What makes a window valid?
   - Q1: zeros <= k
   - Q2: windowSize - maxCount <= k
   - Q3: frequency maps match

2. **Identify what to track**:
   - Count of specific element (Q1)
   - Count of ALL elements + maxFreq (Q2)
   - Frequency map for all chars (Q3)

3. **The tricky part in Q2**:
   - maxCount only increases, never decreases
   - Because keeping it high never hurts validity check

4. **When you hear these keywords**, think sliding window:
   - "Longest substring/subarray with..."
   - "At most k..."
   - "Minimum swaps to group..."
   - "Anagram of..."
