# FAANG Interview Variations: Contains Duplicate

**Core Concept**: Using HashSet for O(1) duplicate detection

---

## Question 1: Warm-Up (FAANG Classic)
**"You have a playlist with song IDs. Detect if any song is playing twice in your 'Recently Played' list of size n."**

### JS Clue 1.1
```javascript
// What data structure gives O(1) lookup?
// We just need to know: "Have I seen this before?"
```

### JS Clue 1.2
```javascript
// Approach 1: Use a Set
// If Set.has(songId) returns true -> duplicate found!

// Approach 2: Sort first, then check adjacent
// Time: O(n log n), Space: O(1)
```

### Solution
```javascript
function hasDuplicateSong(songs) {
  const seen = new Set();
  
  for (const song of songs) {
    if (seen.has(song)) return true;
    seen.add(song);
  }
  return false;
}
```

---

## Question 2: Credit Card Validation (Stripe Style)
**"A credit card is valid if no digit appears more than once in the card number. Given an array of card numbers, return how many are valid."**

### JS Clue 2.1
```javascript
// For each card number (string of digits):
// Check if any digit appears twice
// Card "4532015112830366" - does any digit repeat?
```

### JS Clue 2.2
```javascript
// Convert card to string
// Use Set to detect duplicates
// If Set.size < string.length -> duplicate exists
```

### Solution
```javascript
function countValidCards(cardNumbers) {
  let count = 0;
  
  for (const card of cardNumbers) {
    const digits = card.replace(/-/g, ''); // Remove dashes
    const seen = new Set();
    let isValid = true;
    
    for (const digit of digits) {
      if (seen.has(digit)) {
        isValid = false;
        break;
      }
      seen.add(digit);
    }
    
    if (isValid) count++;
  }
  
  return count;
}
```

---

## Question 3: Distributed System - Unique User IDs (Uber)
**"You have a stream of user login events. Each event has a user ID. Detect the first time a duplicate user ID appears in a window of 10,000 events."**

### JS Clue 3.1
```javascript
// Window of 10,000 events
// We need to find first duplicate within that window
// Set can help, but we also need to manage window sliding
```

### JS Clue 3.2
```javascript
// Use sliding window approach:
// 1. Add new user to Set
// 2. If Set size > window, remove oldest
// 3. If we add duplicate -> found it!
```

### Solution
```javascript
function findDuplicateInWindow(events, windowSize) {
  const seen = new Set();
  
  for (let i = 0; i < events.length; i++) {
    if (seen.has(events[i])) {
      return { duplicate: events[i], index: i };
    }
    seen.add(events[i]);
    
    if (seen.size > windowSize) {
      seen.delete(events[i - windowSize]);
    }
  }
  
  return null;
}
```

---

## Question 4: Array Intersection Size (Google)
**"Given two arrays A and B, find the size of their intersection (unique elements)."**

### JS Clue 4.1
```javascript
// Intersection = elements in BOTH arrays
// Approach: Use Set for one array, check membership in other
```

### JS Clue 4.2
```javascript
// Set B for O(1) lookup
// Iterate through A, collect elements that exist in B
// Use another Set to avoid duplicates in result
```

### Solution
```javascript
function intersectionSize(A, B) {
  const setB = new Set(B);
  const result = new Set();
  
  for (const num of A) {
    if (setB.has(num)) {
      result.add(num);
    }
  }
  
  return result.size;
}
```

---

## Question 5: Longest Subarray Without Duplicates (Facebook)
**"Given an array, find the length of the longest subarray with all unique elements."**

### JS Clue 5.1
```javascript
// This is like Contains Duplicate but we need the LENGTH
// And we need to track the window of unique elements
```

### JS Clue 5.2
```javascript
// Sliding window approach:
// - Expand right, add to Set
// - If duplicate found, shrink from left until duplicate removed
// - Track max window size
```

### Solution
```javascript
function longestUniqueSubarray(arr) {
  const seen = new Set();
  let left = 0;
  let maxLength = 0;
  
  for (let right = 0; right < arr.length; right++) {
    while (seen.has(arr[right])) {
      seen.delete(arr[left]);
      left++;
    }
    seen.add(arr[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
}
```

---

## Key Takeaways

```
┌─────────────────────────────────────────────────────────┐
│              CONTAINS DUPLICATE VARIATIONS              │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  SAME CONCEPT: Set provides O(1) duplicate detection   │
│                                                         │
│  VARIATIONS:                                            │
│  1. Simple: Is there a duplicate? (boolean)             │
│  2. Counting: How many have duplicates?                 │
│  3. Windowed: Find first duplicate in sliding window   │
│  4. Intersection: Duplicates between two arrays        │
│  5. Longest: Longest subarray without duplicates       │
│                                                         │
│  KEY INSIGHT: Set + Sliding Window = Many variations   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Keywords that signal this pattern**: "Duplicate", "Unique", "Already seen", "First repeat", "Intersection"
