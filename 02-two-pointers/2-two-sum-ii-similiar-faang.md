# FAANG Interview Variations: Two Sum II

**Core Concept**: Two pointers on sorted array converging to find target sum

---

## Question 1: Warm-Up (Google)
**"You have a sorted array of stock prices. Find two days where buying low and selling high gives maximum profit."**

### JS Clue 1.1
```javascript
// Maximum profit = max(prices[j] - prices[i]) where j > i
// Sorted array -> can use two pointers from ends
```

### JS Clue 1.2
```javascript
// Since sorted ascending, prices[0] is lowest
// Prices[n-1] is highest
// Buy at left, sell at right
```

### Solution
```javascript
function maxProfitSorted(prices) {
  let left = 0;
  let right = prices.length - 1;
  let maxProfit = 0;
  
  while (left < right) {
    const profit = prices[right] - prices[left];
    maxProfit = Math.max(maxProfit, profit);
    
    if (prices[left] < prices[right]) {
      left++;
    } else {
      right--;
    }
  }
  
  return maxProfit;
}
```

---

## Question 2: Three Sum Closest (Airbnb)
**"Given sorted array, find three numbers that sum closest to target."**

### JS Clue 2.1
```javascript
// Similar to 3Sum
// Fix one, use two pointers for remaining two
// Track closest sum to target
```

### JS Clue 2.2
```javascript
// For each i:
//   left = i+1, right = n-1
//   Update closest if sum is closer to target
```

### Solution
```javascript
function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let closest = nums[0] + nums[1] + nums[2];
  
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      
      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }
      
      if (sum < target) left++;
      else if (sum > target) right--;
      else return sum;
    }
  }
  
  return closest;
}
```

---

## Question 3: Pair with Target Sum in Rotated Array (Microsoft)
**"Given a sorted array that was rotated, find two elements that sum to target."**

### JS Clue 3.1
```javascript
// Rotated array = sorted array with pivot somewhere
// Binary search to find pivot first, then use two pointers
```

### JS Clue 3.2
```javascript
// Alternative: Just use two pointers with modified comparison
// Since array is still mostly sorted
```

### Solution
```javascript
function pairInRotated(nums, target) {
  const n = nums.length;
  let left = 0, right = n - 1;
  
  while (left < right) {
    const sum = nums[left] + nums[right];
    
    if (sum === target) return [left, right];
    
    // Handle rotation: if left <= right's side, move normally
    if (nums[left] <= nums[right]) {
      if (sum < target) left++;
      else right--;
    } else {
      // Array is rotated
      if (sum < target) left++;
      else right--;
    }
  }
  
  return null;
}
```

---

## Question 4: Count Pairs with Sum (Amazon)
**"Given sorted array, count pairs with sum in range [minSum, maxSum]."**

### JS Clue 4.1
```javascript
// Two pointers with counting
// For each left, find range of valid rights
```

### JS Clue 4.2
```javascript
// For each left:
//   Find first right where sum >= minSum
//   Find last right where sum <= maxSum
//   Count = last - first + 1
```

### Solution
```javascript
function countPairsInRange(nums, minSum, maxSum) {
  let count = 0;
  let left = 0, right = nums.length - 1;
  
  while (left < right) {
    const sum = nums[left] + nums[right];
    
    if (sum < minSum) {
      left++;
    } else if (sum > maxSum) {
      right--;
    } else {
      // sum is in range
      count++;
      left++;
      right--;
    }
  }
  
  return count;
}
```

---

## Question 5: Four Sum II (Google)
**"Given four arrays, count how many tuples (i,j,k,l) have sum = 0."**

### JS Clue 5.1
```javascript
// Brute force O(n⁴) - too slow
// Better: Pair up arrays
// Sum A[i]+B[j], sum C[k]+D[l]
// Count pairs that sum to 0
```

### JS Clue 5.2
```javascript
// Store all sums of A+B in map with count
// For each sum of C+D, check if -(C+D) exists in map
```

### Solution
```javascript
function fourSumCount(A, B, C, D) {
  const sumAB = new Map();
  let count = 0;
  
  // Store all A+B sums
  for (const a of A) {
    for (const b of B) {
      sumAB.set(a + b, (sumAB.get(a + b) || 0) + 1);
    }
  }
  
  // Check C+D sums
  for (const c of C) {
    for (const d of D) {
      count += sumAB.get(-(c + d)) || 0;
    }
  }
  
  return count;
}
```

---

## Question 6: Minimum Size Subarray Sum (Meta)
**"Given sorted array, find minimum length subarray with sum >= target."**

### JS Clue 6.1
```javascript
// Sorted array -> sliding window works
// Find smallest window with sum >= target
```

### JS Clue 6.2
```javascript
// Two pointers expanding window
// When sum >= target, shrink from left
// Track minimum length
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

## Key Takeaways

```
┌─────────────────────────────────────────────────────────┐
│               TWO SUM II VARIATIONS                     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  CORE PATTERN: Sorted array + two pointers             │
│                 left starts 0, right starts end        │
│                 Move based on sum vs target            │
│                                                         │
│  VARIATIONS:                                            │
│  1. Max profit (max difference, j > i)                  │
│  2. 3Sum closest (fix one, two pointers for two)       │
│  3. Rotated array (handle pivot)                       │
│  4. Count pairs in range (count valid pairs)          │
│  5. 4Sum (pair up arrays, hash maps)                  │
│  6. Min subarray length (sliding window variant)       │
│                                                         │
│  KEY INSIGHT: Sorted enables "move toward target"     │
│               Sum too small -> move left up (increase) │
│               Sum too large -> move right down (decrease)│
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Keywords that signal this pattern**: "Sorted array", "Two sum", "Pair", "Closest to target", "In range"
