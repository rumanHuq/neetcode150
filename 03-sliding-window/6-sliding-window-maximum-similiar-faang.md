# FAANG Interview Variations: Sliding Window Maximum

**Core Concept**: Deque to maintain decreasing order, O(n) sliding window

---

## Question 1: Warm-Up (Google)
**"Given array, find maximum in each window of size k."**

### JS Clue 1.1
```javascript
// Use deque storing indices
// Deque maintains decreasing values
// Front always has max
```

### JS Clue 1.2
```javascript
// For each new element:
// - Remove indices outside window from front
// - Remove smaller elements from back
// - Add current index to back
// - Window is ready when we have k elements
```

### Solution
```javascript
function maxSlidingWindow(nums, k) {
  const deque = [];
  const result = [];
  
  for (let i = 0; i < nums.length; i++) {
    // Remove indices outside window
    while (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }
    
    // Remove smaller elements from back
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    
    deque.push(i);
    
    // Record max when window is ready
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }
  
  return result;
}
```

---

## Question 2: Max in Submatrix (Amazon)
**"Find maximum in each 2D window of size kxk."**

### JS Clue 2.1
```javascript
// First find max for each row's k-window
// Then find max of those results column-wise
```

### JS Clue 2.2
```javascript
// Step 1: For each row, compute sliding max of size k
// Step 2: For columns of result, compute sliding max of size k
```

### Solution
```javascript
function maxSlidingWindow2D(matrix, k) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];
  
  // Step 1: Max for each row's k-window
  const rowMax = [];
  for (let i = 0; i < rows; i++) {
    const row = maxSlidingWindow(matrix[i], k);
    rowMax.push(row);
  }
  
  // Step 2: Max of column k-windows
  for (let col = 0; col <= cols - k; col++) {
    const deque = [];
    for (let row = 0; row < rows; row++) {
      // Maintain deque for this column
      if (deque.length > 0 && deque[0] <= row - k) {
        deque.shift();
      }
      
      while (deque.length > 0 && rowMax[deque[deque.length - 1]][col] < rowMax[row][col]) {
        deque.pop();
      }
      
      deque.push(row);
      
      if (row >= k - 1) {
        if (result.length === 0) result.push([]);
        result[result.length - 1].push(rowMax[deque[0]][col]);
      }
    }
  }
  
  return result;
}

function maxSlidingWindow(nums, k) {
  const deque = [];
  const result = [];
  
  for (let i = 0; i < nums.length; i++) {
    while (deque.length > 0 && deque[0] <= i - k) deque.shift();
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) deque.pop();
    deque.push(i);
    if (i >= k - 1) result.push(nums[deque[0]]);
  }
  
  return result;
}
```

---

## Question 3: Stock Span (Microsoft)
**"For each day, find how many consecutive days price was <= today."**

### JS Clue 3.1
```javascript
// Span[i] = i - previous greater element index
// Use stack to find previous greater
```

### JS Clue 3.2
```javascript
// While stack not empty and prices[stack.top] <= prices[i]
// Pop
// Span = i - (stack.empty ? 0 : stack.top + 1)
```

### Solution
```javascript
function stockSpan(prices) {
  const span = [];
  const stack = [];
  
  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[stack[stack.length - 1]] <= prices[i]) {
      stack.pop();
    }
    
    span[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
    stack.push(i);
  }
  
  return span;
}
```

---

## Question 4: Next Greater Element II (Uber)
**"For each element, find next greater element in circular array."**

### JS Clue 4.1
```javascript
// Circular array = traverse twice
// Use stack to track elements waiting for greater
```

### JS Clue 4.2
```javascript
// For each element (twice):
//   Pop from stack while current > stack.top
//   Those popped get current as their next greater
```

### Solution
```javascript
function nextGreaterElements(nums) {
  const n = nums.length;
  const result = new Array(n).fill(-1);
  const stack = [];
  
  for (let i = 0; i < n * 2; i++) {
    const idx = i % n;
    
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[idx]) {
      result[stack.pop()] = nums[idx];
    }
    
    if (i < n) stack.push(idx);
  }
  
  return result;
}
```

---

## Question 5: Constrained Subset Sum (Google)
**"Find max sum of any non-empty subarray where no two elements are within k distance."**

### JS Clue 5.1
```javascript
// DP with deque
// dp[i] = max sum ending at i
// dp[i] = nums[i] + max(dp[j]) for j in [i-k, i-1]
```

### JS Clue 5.2
```javascript
// Use deque to maintain max of dp values
// Slide deque with window
```

### Solution
```javascript
function constrainedSubsetSum(nums, k) {
  const n = nums.length;
  const dp = new Array(n);
  const deque = [];
  let maxSum = nums[0];
  
  for (let i = 0; i < n; i++) {
    // Get max from deque
    dp[i] = nums[i];
    if (deque.length > 0) {
      dp[i] = Math.max(dp[i], nums[i] + dp[deque[0]]);
    }
    
    // Update answer
    maxSum = Math.max(maxSum, dp[i]);
    
    // Maintain deque (indices with decreasing dp)
    while (deque.length > 0 && dp[deque[deque.length - 1]] < dp[i]) {
      deque.pop();
    }
    deque.push(i);
    
    // Remove indices outside window
    if (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }
  }
  
  return maxSum;
}
```

---

## Question 6: Maximum of Minimum for Every Window Size (Adobe)
**"For each window size, find the minimum value in that window, then report max of those minimums."**

### JS Clue 6.1
```javascript
// For each window size, track minimums
// Then compute maximum of minimums for each size
```

### JS Clue 6.2
```javascript
// Use next smaller element indices
// Length of window where element is minimum = right - left - 1
```

### Solution
```javascript
function maxOfMin(nums) {
  const n = nums.length;
  const left = new Array(n + 1).fill(-1);
  const right = new Array(n + 1).fill(n);
  const stack = [];
  
  // Find previous smaller
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] >= nums[i]) {
      stack.pop();
    }
    left[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(i);
  }
  
  // Find next smaller
  stack.length = 0;
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] >= nums[i]) {
      stack.pop();
    }
    right[i] = stack.length === 0 ? n : stack[stack.length - 1];
    stack.push(i);
  }
  
  // For each element, find window where it's minimum
  const ans = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    const len = right[i] - left[i] - 1;
    ans[len] = Math.max(ans[len], nums[i]);
  }
  
  // Fill gaps
  for (let i = n - 1; i >= 1; i--) {
    ans[i] = Math.max(ans[i], ans[i + 1]);
  }
  
  return ans.slice(1);
}
```

---

## Key Takeaways

```
┌─────────────────────────────────────────────────────────┐
│          SLIDING WINDOW MAXIMUM VARIATIONS              │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  CORE PATTERN: Deque maintains decreasing order       │
│                 O(1) max lookup per window              │
│                                                         │
│  DEQUE OPERATIONS:                                      │
│  1. Remove from front: indices outside window           │
│  2. Remove from back: smaller elements (can't be max)   │
│  3. Front always has maximum                            │
│                                                         │
│  VARIATIONS:                                            │
│  1. Basic sliding max (deque)                           │
│  2. 2D window max (row then column)                     │
│  3. Stock span (previous greater)                       │
│  4. Next greater in circle (circular traversal)         │
│  5. Constrained subset sum (DP + deque)                 │
│  6. Max of minimums (window size analysis)             │
│                                                         │
│  KEY INSIGHT: Deque = "who can be max?"                │
│               Smaller elements never become max        │
│               while current element is in window       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Keywords that signal this pattern**: "Sliding window", "Maximum in window", "Moving maximum", "Monotonic deque", "Stock span"
