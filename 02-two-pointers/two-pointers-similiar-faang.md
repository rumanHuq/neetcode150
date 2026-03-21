# FAANG Interview Questions: Two Pointers

## Problem Pattern Overview

Two Pointers is a technique where you use two pointers moving through data to achieve O(n) or O(n log n) solutions. Key patterns:
- **Palindrome checking**: pointers move towards center
- **Sorted array problems**: pointers at both ends converging
- **N-sum problems**: pointers to find combinations
- **Container problems**: pointers at edges finding optimal areas

---

## Question 1: Warm-Up - Valid Palindrome (Leetcode 125)
**"A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward."**

### JS Clue 1.1
```javascript
// What makes something a palindrome?
// First char must equal last char
// Second char must equal second-to-last char
// And so on...
```

### JS Clue 1.2
```javascript
// Two approaches:
// 1. Two pointers: one at start, one at end, move towards center
// 2. Reverse and compare
//
// Which is more space-efficient?
```

### JS Clue 1.3
```javascript
function isPalindrome(s) {
  // Step 1: Clean the string (remove non-alphanumeric, lowercase)
  // Step 2: Use two pointers to compare

  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
```

### In-Place Version (No Extra Space)
```javascript
function isPalindromeInPlace(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Move left pointer to next alphanumeric
    while (left < right && !isAlphanumeric(s[left])) left++;
    // Move right pointer to previous alphanumeric
    while (left < right && !isAlphanumeric(s[right])) right--;

    // Compare (case-insensitive)
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

function isAlphanumeric(c) {
  return /[a-zA-Z0-9]/.test(c);
}
```

---

## Question 2: Two Sum II (Leetcode 167)
**"Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number."**

### JS Clue 2.1
```javascript
// Similar to Leetcode 1 (Two Sum), but array is SORTED
// Can we use this sorted property to optimize?
```

### JS Clue 2.2
```javascript
// With sorted array:
// - Smallest + largest = sum
// - If sum is too small, move left pointer right (increase)
// - If sum is too large, move right pointer left (decrease)
// This is the TWO POINTER technique!
```

### JS Clue 2.3
```javascript
function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];  // 1-indexed
    } else if (sum < target) {
      left++;  // Need a bigger sum
    } else {
      right--;  // Need a smaller sum
    }
  }
}
```

### Why This Works
```javascript
// Sorted array guarantees:
// - Moving left increases sum
// - Moving right decreases sum
// - We can binary-search our way to the answer!
```

---

## Question 3: 3Sum (Leetcode 15)
**"Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i !== j`, `j !== k`, and `the sum of the triplet is zero."**

### JS Clue 3.1
```javascript
// 2Sum gave us a pair that sums to target
// 3Sum asks for a triplet that sums to zero
// Can we reduce this to 2Sum?
```

### JS Clue 3.2
```javascript
// Fix one element (let's call it fix)
// Then find pair that sums to -fix (this is 2Sum!)
//
// For each fix:
// - Use two pointers to find pairs
// - Skip duplicates to avoid repeated triplets
```

### JS Clue 3.3
```javascript
function threeSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b);  // Sort first!

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates for first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Now find pair that sums to -nums[i]
    let left = i + 1;
    let right = nums.length - 1;
    const target = -nums[i];

    while (left < right) {
      const sum = nums[left] + nums[right];

      if (sum === target) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates for left and right
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}
```

### The Key Insight
```javascript
// Why sort first?
// 1. Enables two-pointer technique
// 2. Makes skipping duplicates easy
// 3. Ensures we find all unique triplets
//
// Why skip duplicates?
// [-1, -1, 0, 1] with target = -1
// Without skip: [(-1, -1, 2?)] -> duplicates!
```

---

## Question 4: Container With Most Water (Leetcode 11)
**"Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn. Find two lines that together with the x-axis form a container that holds the most water."**

### JS Clue 4.1
```javascript
// Water trapped = width * height
// Width = distance between lines
// Height = shorter line (water spills over!)
```

### JS Clue 4.2
```javascript
// Brute force: O(n²) - check all pairs
// 
// Better: Two pointers!
// Start with widest container (all lines)
// Which pointer should we move?
```

### JS Clue 4.3
```javascript
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const width = right - left;
    const currentHeight = Math.min(height[left], height[right]);
    const area = width * currentHeight;

    maxWater = Math.max(maxWater, area);

    // Move the pointer with smaller height
    // Because area is limited by the shorter line
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}
```

### Why Move the Smaller Line?
```javascript
// Let's say left=1 (height=1) and right=5 (height=10)
// Area = min(1, 10) * 4 = 4
//
// Option 1: Move left (height 1)
// New area = min(new_height, 10) * 3
// Even if new_height > 1, we might get more area
//
// Option 2: Move right (height 10)
// New area = min(1, new_height) * 3 = at most 3
// CANNOT be more than current 4!
//
// Key insight: Moving taller line CANNOT increase area
// (area limited by shorter line, and width only decreases)
```

---

## Question 5: Trapping Rain Water (Leetcode 42)
**"Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining."**

### JS Clue 5.1
```javascript
// For each position, water trapped = 
// min(max height to left, max height to right) - current height
//
// Why min of maxes?
// Water level is determined by the shorter boundary!
```

### JS Clue 5.2
```javascript
// Brute force: O(n²)
// For each position, scan left and right to find max heights
//
// Better: Precompute left max and right max arrays - O(n) space
//
// Best: Two pointers - O(1) space!
```

### JS Clue 5.3
```javascript
// Two pointer approach:
// Track leftMax and rightMax
// Water at a position is limited by the SMALLER of leftMax/rightMax
//
// If leftMax < rightMax:
// - We know leftMax is the bottleneck
// - Process left side
// - Move left pointer
```

### Solution with Two Pointers
```javascript
function trap(height) {
  if (height.length === 0) return 0;

  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      // Process left side
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      // Process right side
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }

  return water;
}
```

### The Key Insight
```javascript
// Compare to Container With Most Water:
// Both use the insight that "shorter boundary limits the water"
// 
// Container: We choose container with max area
// Rain Water: We calculate water at each position
//
// Key difference:
// - Container: width changes, we want max
// - Rain Water: water level is bounded by min(maxL, maxR)
```

---

## The Mental Model

```
┌─────────────────────────────────────────────────────────────────┐
│                      TWO POINTERS                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  PATTERN 1: PALINDROME CHECKING                                 │
│  ──────────────────────────────                                 │
│  left = 0, right = length - 1                                   │
│  while left < right:                                            │
│      compare and move towards center                            │
│                                                                 │
│  Examples: Valid Palindrome                                     │
│                                                                 │
│  PATTERN 2: CONVERGING POINTERS (Sorted Array)                  │
│  ────────────────────────────────────────────                   │
│  left = 0, right = length - 1                                    │
│  while left < right:                                            │
│      sum = arr[left] + arr[right]                               │
│      if sum < target: left++                                     │
│      if sum > target: right--                                    │
│                                                                 │
│  Examples: Two Sum II, 3Sum, 4Sum                               │
│                                                                 │
│  PATTERN 3: EDGE POINTERS (Optimization)                        │
│  ─────────────────────────────────                              │
│  left = 0, right = length - 1                                   │
│  Start from widest/narrowest, move towards optimal              │
│  "Area limited by shorter boundary"                            │
│                                                                 │
│  Examples: Container With Most Water                            │
│                                                                 │
│  PATTERN 4: BOUNDARY TRACKING                                    │
│  ──────────────────────────                                     │
│  Track leftMax, rightMax while moving pointers                  │
│  Water trapped = min(leftMax, rightMax) - height                │
│                                                                 │
│  Examples: Trapping Rain Water                                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Key Takeaways for Interviews

1. **Two pointers almost always go on sorted data** (except palindrome)
   - Sorting enables the "converging" movement
   - Enables O(n) instead of O(n²)

2. **The "complement" trick from Two Sum applies to N-Sum**
   - 3Sum: Fix one, find pair that sums to -fix (2Sum)
   - 4Sum: Fix two, find pair that sums to -sum (2Sum)

3. **"Shorter boundary limits capacity" insight**:
   - Container With Most Water
   - Trapping Rain Water
   - Both follow the same pattern!

4. **When you hear these keywords**, think two pointers:
   - "Sorted array"
   - "Palindrome"
   - "Sum to target"
   - "Container", "Water", "Area"
   - "Most water" (optimization)
   - "Window" (often sliding window, but two pointers work too)

5. **Skip duplicates**:
   - For any N-Sum problem, skip duplicates after finding a solution
   - `while (left < right && nums[left] === nums[left+1]) left++`
