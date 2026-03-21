# FAANG Interview Variations: Valid Palindrome

**Core Concept**: Two pointers converging from opposite ends, comparing characters

---

## Question 1: Warm-Up (Google)
**"Check if a linked list is a palindrome."**

### JS Clue 1.1
```javascript
// Linked list = no random access
// Approaches:
// 1. Reverse half, compare with first half
// 2. Recursive with two pointers
```

### JS Clue 1.2
```javascript
// Find middle, reverse second half, compare
// Restore if needed
```

### Solution
```javascript
function isPalindromeList(head) {
  // Find middle
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  // Reverse second half
  let prev = null, curr = slow;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  
  // Compare
  let p1 = head, p2 = prev;
  while (p2) {
    if (p1.val !== p2.val) return false;
    p1 = p1.next;
    p2 = p2.next;
  }
  
  return true;
}
```

---

## Question 2: Almost Palindrome (Amazon)
**"Check if string can become palindrome by removing at most one character."**

### JS Clue 2.1
```javascript
// Two pointers approach with one skip allowed
// If mismatch found, try skipping left OR right
// If either works, return true
```

### JS Clue 2.2
```javascript
// Helper function: check if substring is palindrome
// Skip one character at a time, check if remaining is palindrome
```

### Solution
```javascript
function validPalindrome(s) {
  let left = 0, right = s.length - 1;
  
  while (left < right) {
    if (s[left] !== s[right]) {
      return isPalindrome(s, left + 1, right) || 
             isPalindrome(s, left, right - 1);
    }
    left++;
    right--;
  }
  
  return true;
}

function isPalindrome(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}
```

---

## Question 3: Palindromic Substrings Count (Microsoft)
**"Count the number of palindromic substrings in a string."**

### JS Clue 3.1
```javascript
// For each center, expand outward
// Count odd and even length palindromes
```

### JS Clue 3.2
```javascript
// Odd: center at each character, expand
// Even: center between pairs, expand
```

### Solution
```javascript
function countPalindromes(s) {
  let count = 0;
  
  function expand(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  }
  
  for (let i = 0; i < s.length; i++) {
    expand(i, i);     // Odd length
    expand(i, i + 1); // Even length
  }
  
  return count;
}
```

---

## Question 4: Reverse Vowels Only (Adobe)
**"Given a string, reverse only the vowels in it."**

### JS Clue 4.1
```javascript
// Two pointers approach
// Move left pointer to vowel
// Move right pointer to vowel
// Swap them
```

### JS Clue 4.2
```javascript
// Vowels: a, e, i, o, u (both cases)
// Continue until both pointers find vowels
```

### Solution
```javascript
function reverseVowels(s) {
  const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
  const arr = s.split('');
  let left = 0, right = arr.length - 1;
  
  while (left < right) {
    while (left < right && !vowels.has(arr[left])) left++;
    while (left < right && !vowels.has(arr[right])) right--;
    
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  
  return arr.join('');
}
```

---

## Question 5: Palindrome Permutation (Meta)
**"Check if a string can be rearranged to form a palindrome."**

### JS Clue 5.1
```javascript
// Palindrome property:
// - Even length: all chars appear even times
// - Odd length: at most one char appears odd times
```

### JS Clue 5.2
```javascript
// Count character frequencies
// Check how many characters have odd count
```

### Solution
```javascript
function canPermutePalindrome(s) {
  const count = {};
  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }
  
  let oddCount = 0;
  for (const freq of Object.values(count)) {
    if (freq % 2 === 1) oddCount++;
  }
  
  return oddCount <= 1;
}
```

---

## Question 6: Split String into Palindromes (Uber)
**"Given a string, determine minimum cuts needed to partition it into palindromic substrings."**

### JS Clue 6.1
```javascript
// DP approach:
// dp[i] = minimum cuts for s[0..i]
// For each j < i, if s[j..i] is palindrome, dp[i] = min(dp[i], dp[j-1] + 1)
```

### JS Clue 6.2
```javascript
// Precompute palindrome table
// Then DP for minimum cuts
```

### Solution
```javascript
function minCut(s) {
  const n = s.length;
  const isPal = Array(n).fill().map(() => Array(n).fill(true));
  const dp = Array(n).fill(0);
  
  // Build palindrome table
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;
      isPal[i][j] = s[i] === s[j] && (len === 2 || isPal[i + 1][j - 1]);
    }
  }
  
  // DP for minimum cuts
  for (let i = 0; i < n; i++) {
    if (isPal[0][i]) {
      dp[i] = 0;
    } else {
      dp[i] = i;
      for (let j = 1; j <= i; j++) {
        if (isPal[j][i]) {
          dp[i] = Math.min(dp[i], dp[j - 1] + 1);
        }
      }
    }
  }
  
  return dp[n - 1];
}
```

---

## Key Takeaways

```
┌─────────────────────────────────────────────────────────┐
│              VALID PALINDROME VARIATIONS                │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  CORE PATTERN: Two pointers converging from ends       │
│                 Compare elements, move towards center  │
│                                                         │
│  VARIATIONS:                                            │
│  1. Linked list palindrome (find middle + reverse)     │
│  2. Almost palindrome (one deletion allowed)           │
│  3. Count palindromic substrings (expand from center)  │
│  4. Reverse vowels only (filter while swapping)        │
│  5. Palindrome permutation (frequency counting)        │
│  6. Min cuts for palindrome partitioning (DP)         │
│                                                         │
│  KEY INSIGHT: Pointers move TOWARD center              │
│               Compare elements, skip when mismatch     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Keywords that signal this pattern**: "Palindrome", "Same forward and backward", "Reverse", "Mirror", "Symmetric"
