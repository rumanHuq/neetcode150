# FAANG Interview Variations: 3Sum

**Core Concept**: Fix one element, use two pointers for remaining two to sum to target

---

## Question 1: Warm-Up (Google)
**"Find all triplets in array that sum to less than target."**

### JS Clue 1.1
```javascript
// Similar to 3Sum but less than, not equal
// Fix one, two pointers for remaining
// Count all valid combinations
```

### JS Clue 1.2
```javascript
// Sort, then for each i:
//   left = i+1, right = n-1
//   Count pairs where sum < target
```

### Solution
```javascript
function threeSumLessThan(nums, target) {
  nums.sort((a, b) => a - b);
  let count = 0;
  
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      
      if (sum < target) {
        // All pairs (left..right) with this left work
        count += right - left;
        left++;
      } else {
        right--;
      }
    }
  }
  
  return count;
}
```

---

## Question 2: 3Sum With Duplicates Allowed (Amazon)
**"Find all triplets including duplicates. Return unique triplets only."**

### JS Clue 2.1
```javascript
// Standard 3Sum with duplicate handling
// Skip duplicates at each level after processing
```

### JS Clue 2.2
```javascript
// After finding triplet:
// while (left < right && nums[left] === nums[left+1]) left++;
// while (left < right && nums[right] === nums[right-1]) right--;
```

### Solution
```javascript
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    let left = i + 1;
    let right = nums.length - 1;
    
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  
  return result;
}
```

---

## Question 3: Quadruple Sum (Adobe)
**"Find all unique quadruplets that sum to target."**

### JS Clue 3.1
```javascript
// Extend 3Sum by fixing TWO elements
// Then use two pointers for remaining two
```

### JS Clue 3.2
```javascript
// Sort, then:
// for i: 0 to n-4
//   for j: i+1 to n-3
//     left = j+1, right = n-1
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
      
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        
        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          
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
  }
  
  return result;
}
```

---

## Question 4: Split Array into Triplets (Apple)
**"Can you split array into triplets where each triplet sums to zero?"**

### JS Clue 4.1
```javascript
// Check if array can be divided into groups of 3
// Each group's sum must be zero
```

### JS Clue 4.2
```javascript
// If total sum % 3 !== 0, impossible
// Use greedy: for each unvisited index, try to find pair
```

### Solution
```javascript
function canThreePartsEqualSum(arr) {
  const total = arr.reduce((a, b) => a + b, 0);
  if (total % 3 !== 0) return false;
  
  const target = total / 3;
  let sum = 0, count = 0;
  
  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i];
    
    if (sum === target) {
      count++;
      sum = 0;
    }
    
    if (count === 2) return true;
  }
  
  return false;
}
```

---

## Question 5: Count Unique Triplets with Sum Equals Target (Microsoft)
**"Count number of unique triplets (not return them) that sum to target."**

### JS Clue 5.1
```javascript
// Same as 3Sum but just count, don't store
// Skip duplicates to count unique only
```

### JS Clue 5.2
```javascript
// After sorting:
// Skip i if same as i-1
// Skip left if same as left+1
// Skip right if same as right-1
```

### Solution
```javascript
function threeSumCount(nums, target) {
  nums.sort((a, b) => a - b);
  let count = 0;
  
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    let left = i + 1;
    let right = nums.length - 1;
    
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      
      if (sum === target) {
        count++;
        
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
  
  return count;
}
```

---

## Question 6: 3Sum Smaller (Uber)
**"Find number of triplets where sum is strictly less than target."**

### JS Clue 6.1
```javascript
// Similar to counting pairs less than sum
// For each i, count pairs (left, right) with sum < target - nums[i]
```

### JS Clue 6.2
```javascript
// Since sorted:
// If nums[i] + nums[left] + nums[right] < target
// Then all pairs from left to right work
// Count += right - left
```

### Solution
```javascript
function threeSumSmaller(nums, target) {
  nums.sort((a, b) => a - b);
  let count = 0;
  
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      
      if (sum < target) {
        // All pairs from left to right work
        count += right - left;
        left++;
      } else {
        right--;
      }
    }
  }
  
  return count;
}
```

---

## Key Takeaways

```
┌─────────────────────────────────────────────────────────┐
│                  3SUM VARIATIONS                       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  CORE PATTERN: Fix one, two pointers for two          │
│                 Reduce n-sum to 2-sum                  │
│                                                         │
│  EXTENSIONS:                                            │
│  - 3Sum Closest: track closest to target               │
│  - 4Sum: fix two, reduce to 2Sum                        │
│  - 3Sum Smaller: count instead of find                  │
│                                                         │
│  VARIATIONS:                                            │
│  1. Sum less than target (count all)                   │
│  2. With duplicates (skip after finding)               │
│  3. Quadruple sum (fix two elements)                   │
│  4. Split into equal-sum groups                        │
│  5. Count unique (don't store, just increment)          │
│  6. Sum strictly smaller (count pairs)                 │
│                                                         │
│  KEY INSIGHT: "Fix one, solve two"                    │
│               Sorting enables two-pointer technique    │
│               Skip duplicates = unique results         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Keywords that signal this pattern**: "Three/four sum", "Triplets", "Tuple", "Triples", "Sum to target"
