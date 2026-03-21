# FAANG Interview Variations: Two Sum

**Core Concept**: Use HashMap to find complement (target - num) in O(n) time

---

## Question 1: Warm-Up (Google)
**"You have a list of product prices. A customer has a budget. Find two products that exactly match the budget."**

### JS Clue 1.1
```javascript
// Classic Two Sum with different vocabulary
// Product prices = array
// Budget = target
// Find two items = find two numbers that sum to target
```

### JS Clue 1.2
```javascript
// For each price:
// Need: budget - price = complement
// Use Map to track seen prices
```

### Solution
```javascript
function findTwoProducts(prices, budget) {
  const seen = new Map();
  
  for (let i = 0; i < prices.length; i++) {
    const complement = budget - prices[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(prices[i], i);
  }
  
  return null;
}
```

---

## Question 2: Two Sum - Return Indices Sorted (Microsoft)
**"Find two numbers that add to target, return their indices in ascending order."**

### JS Clue 2.1
```javascript
// Our standard Two Sum returns indices in any order
// But interviewer might want sorted output
// How to handle if we find [5, 2] instead of [2, 5]?
```

### JS Clue 2.2
```javascript
// Approach: Find first, then find second (guaranteed to be different)
// Or: Find both, sort the result
```

### Solution
```javascript
function twoSumSorted(nums, target) {
  const seen = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      const j = seen.get(complement);
      return [Math.min(i, j), Math.max(i, j)];
    }
    seen.set(nums[i], i);
  }
  
  return [];
}
```

---

## Question 3: Two Sum - Return Values (Not Indices) (Amazon)
**"Given an array, find two numbers that sum to target. Return the actual numbers, not indices."**

### JS Clue 3.1
```javascript
// Now we need the VALUES, not indices
// But must ensure we return distinct elements
```

### JS Clue 3.2
```javascript
// Store values in Set (not Map)
// For each num, check if complement is in Set
// If yes, return [complement, num]
```

### Solution
```javascript
function twoSumValues(nums, target) {
  const seen = new Set();
  
  for (const num of nums) {
    const complement = target - num;
    if (seen.has(complement)) {
      return [complement, num];
    }
    seen.add(num);
  }
  
  return [];
}
```

---

## Question 4: Three Sum (Apple)
**"Find all unique triplets in array that sum to zero."**

### JS Clue 4.1
```javascript
// Can we reduce this to Two Sum?
// Fix one element, then find pair that sums to -fix
// This is a classic reduction technique!
```

### JS Clue 4.2
```javascript
// For each i from 0 to n-3:
//   target = -nums[i]
//   Use Two Sum approach for remaining elements
//   Skip duplicates!
```

### Solution
```javascript
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    const target = -nums[i];
    const seen = new Set();
    
    for (let j = i + 1; j < nums.length; j++) {
      const complement = target - nums[j];
      if (seen.has(complement)) {
        result.push([nums[i], complement, nums[j]]);
        while (j + 1 < nums.length && nums[j] === nums[j + 1]) j++;
      }
      seen.add(nums[j]);
    }
  }
  
  return result;
}
```

---

## Question 5: Four Sum (Adobe)
**"Find all unique quadruplets that sum to target."**

### JS Clue 5.1
```javascript
// Extend Three Sum pattern:
// Fix two elements, reduce to Two Sum for remaining two
```

### JS Clue 5.2
```javascript
// Nested loops:
// for i: 0 to n-4
//   for j: i+1 to n-3
//     find two sum for nums[j+1:] = target - nums[i] - nums[j]
```

### Solution
```javascript
function fourSum(nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];
  
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      
      let left = j + 1;
      let right = nums.length - 1;
      const newTarget = target - nums[i] - nums[j];
      
      while (left < right) {
        const sum = nums[left] + nums[right];
        
        if (sum === newTarget) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum < newTarget) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  
  return result;
}
```

---

## Question 6: Two Sum - Multiple Pairs (Bloomberg)
**"Find all pairs that sum to target. Each number can only be used once."**

### JS Clue 6.1
```javascript
// Unlike standard Two Sum (find ONE pair), find ALL pairs
// Each element used at most once
```

### JS Clue 6.2
```javascript
// Use Map to count frequencies
// For each num, take as many as min(count[num], count[complement])
// Decrement both counts
```

### Solution
```javascript
function findAllPairs(nums, target) {
  const count = {};
  const result = [];
  
  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
  }
  
  for (const num of nums) {
    const complement = target - num;
    if (count[num] > 0 && count[complement] > 0) {
      result.push([num, complement]);
      count[num]--;
      count[complement]--;
    }
  }
  
  return result;
}
```

---

## Question 7: Subarray Sum Equals K (Microsoft)
**"Find total number of continuous subarrays that sum to k."**

### JS Clue 7.1
```javascript
// Not just pairs - subarrays!
// prefixSum[i] = sum of nums[0..i-1]
// If prefixSum[j] - prefixSum[i] = k, then subarray i..j-1 sums to k
```

### JS Clue 7.2
```javascript
// Use cumulative sum + frequency map
// For each prefix sum, check: prefixSum - k exists?
// This is like Two Sum but for prefix sums!
```

### Solution
```javascript
function subarraySum(nums, k) {
  const prefixFreq = { 0: 1 };
  let prefixSum = 0;
  let count = 0;
  
  for (const num of nums) {
    prefixSum += num;
    count += prefixFreq[prefixSum - k] || 0;
    prefixFreq[prefixSum] = (prefixFreq[prefixSum] || 0) + 1;
  }
  
  return count;
}
```

---

## Key Takeaways

```
┌─────────────────────────────────────────────────────────┐
│                  TWO SUM VARIATIONS                     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  CORE PATTERN: HashMap for O(1) complement lookup       │
│                 complement = target - num              │
│                                                         │
│  VARIATIONS:                                            │
│  1. Return indices (basic)                             │
│  2. Return sorted indices                              │
│  3. Return values instead of indices                   │
│  4. N-Sum (reduce to 2-Sum)                            │
│    - 3Sum: fix one, reduce to 2Sum                     │
│    - 4Sum: fix two, reduce to 2Sum                     │
│  5. Find all pairs (not just one)                     │
│  6. Subarray sum (prefix sum + complement)             │
│                                                         │
│  KEY INSIGHT: "For each X, what do I need?"            │
│               translates to HashMap lookup             │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Keywords that signal this pattern**: "Sum to target", "Two numbers", "Add up to", "Complement", "Find pair/triplet/quadruplet"
