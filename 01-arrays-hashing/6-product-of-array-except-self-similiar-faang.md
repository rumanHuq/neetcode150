# FAANG Interview Variations: Product of Array Except Self

**Core Concept**: Use prefix and suffix products to compute product of all elements except self

---

## Question 1: Warm-Up (Google)
**"You have product prices for n days. For each day, calculate the product of all prices except that day (you can't use division)."**

### JS Clue 1.1
```javascript
// Naive: O(n²) - multiply all except each element
// Better: Prefix * Suffix approach
```

### JS Clue 1.2
```javascript
// prefix[i] = product of all elements before i
// suffix[i] = product of all elements after i
// answer[i] = prefix[i] * suffix[i]
```

### Solution
```javascript
function productExceptDay(prices) {
  const n = prices.length;
  const prefix = new Array(n).fill(1);
  const suffix = new Array(n).fill(1);
  
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * prices[i - 1];
  }
  
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * prices[i + 1];
  }
  
  return prefix.map((p, i) => p * suffix[i]);
}
```

---

## Question 2: Subarray Product Less Than K (Microsoft)
**"Given an array of positive integers, count the number of subarrays where product of all elements is less than k."**

### JS Clue 2.1
```javascript
// Sliding window with product tracking
// Expand right, multiply product
// While product >= k, shrink from left
```

### JS Clue 2.2
```javascript
// For window [left, right]:
// Number of subarrays ending at right = right - left + 1
// Count all valid windows
```

### Solution
```javascript
function numSubarrayProductLessThanK(nums, k) {
  if (k <= 1) return 0;
  
  let product = 1;
  let left = 0;
  let count = 0;
  
  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];
    
    while (product >= k) {
      product /= nums[left];
      left++;
    }
    
    count += right - left + 1;
  }
  
  return count;
}
```

---

## Question 3: Product of Array Except Self - Space Optimized (Amazon)
**"Solve the problem without using extra space for prefix/suffix arrays."**

### JS Clue 3.1
```javascript
// We can use the result array itself
// First pass: compute prefix products in result
// Second pass: multiply with running suffix
```

### JS Clue 3.2
```javascript
// 1. result[i] = product of all LEFT elements (before i)
// 2. Use variable 'right' to track suffix product
//    Multiply result[i] with right as we traverse
```

### Solution
```javascript
function productExceptSelfOptimized(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);
  
  // Left products (already in result)
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }
  
  // Right pass: multiply with running product
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }
  
  return result;
}
```

---

## Question 4: Maximum Product Subarray (Apple)
**"Find the contiguous subarray which has the largest product."**

### JS Clue 4.1
```javascript
// Product can get larger with negatives
// Track both max and min (because min * neg = max)
```

### JS Clue 4.2
```javascript
// At each position:
// max[i] = max of (nums[i], max[i-1] * nums[i], min[i-1] * nums[i])
// min[i] = min of (nums[i], max[i-1] * nums[i], min[i-1] * nums[i])
```

### Solution
```javascript
function maxProduct(nums) {
  let maxProd = nums[0];
  let minProd = nums[0];
  let result = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];
    const tempMax = Math.max(curr, maxProd * curr, minProd * curr);
    const tempMin = Math.min(curr, maxProd * curr, minProd * curr);
    
    maxProd = tempMax;
    minProd = tempMin;
    result = Math.max(result, maxProd);
  }
  
  return result;
}
```

---

## Question 5: Product of Two Arrays (Uber)
**"Given two arrays A and B, compute C where C[i] = product of all A[j] for j != i."**

### JS Clue 5.1
```javascript
// Similar to product except self, but across two arrays
// C[i] = product of all elements in A EXCEPT A[i]
```

### JS Clue 5.2
```javascript
// Use prefix/suffix but on single array
// Same concept applies
```

### Solution
```javascript
function productExceptIndex(A) {
  const n = A.length;
  const prefix = new Array(n);
  const suffix = new Array(n);
  
  prefix[0] = 1;
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * A[i - 1];
  }
  
  suffix[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * A[i + 1];
  }
  
  return A.map((_, i) => prefix[i] * suffix[i]);
}
```

---

## Question 6: Brick Wall (Google)
**"Given a wall of bricks, find minimum number of bricks crossed when drawing a vertical line."**

### JS Clue 6.1
```javascript
// Bricks don't cross where brick edges align
// Count edges at each position
// Max edges = minimum crossed bricks
```

### JS Clue 6.2
```javascript
// For each row, track cumulative widths
// Count how many rows have edge at each position
// Maximum count = best line position
```

### Solution
```javascript
function minBricks(wall) {
  const edges = new Map();
  let maxEdges = 0;
  
  for (const row of wall) {
    let pos = 0;
    for (let i = 0; i < row.length - 1; i++) {
      pos += row[i];
      edges.set(pos, (edges.get(pos) || 0) + 1);
      maxEdges = Math.max(maxEdges, edges.get(pos));
    }
  }
  
  return wall.length - maxEdges;
}
```

---

## Key Takeaways

```
┌─────────────────────────────────────────────────────────┐
│           PRODUCT EXCEPT SELF VARIATIONS                │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  CORE PATTERN: Prefix * Suffix products                │
│                 - Avoids O(n²) multiplication          │
│                 - O(n) time, O(n) or O(1) space       │
│                                                         │
│  VARIATIONS:                                            │
│  1. Basic prefix-suffix                                 │
│  2. Count subarrays with product < k (sliding window)  │
│  3. Space-optimized (reuse result array)               │
│  4. Maximum product subarray (track min AND max)        │
│  5. Product across arrays (same technique)              │
│  6. Edge counting (clever brick wall application)       │
│                                                         │
│  KEY INSIGHT: "Product of all except" = prefix * suffix│
│               "Maximum product" = track both min & max  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Keywords that signal this pattern**: "Product of all except", "Without using division", "Prefix product", "Suffix product", "Running product"
