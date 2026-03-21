# FAANG Interview Variations: Trapping Rain Water

**Core Concept**: Water trapped = min(max left, max right) - current height

---

## Question 1: Warm-Up (Google)
**"Given elevation map, calculate total water that can be stored."**

### JS Clue 1.1
```javascript
// Classic water trapping
// For each bar: water = min(maxLeft, maxRight) - height
```

### JS Clue 1.2
```javascript
// Precompute left max and right max arrays
// Then calculate water for each position
```

### Solution
```javascript
function trapWater(heights) {
  const n = heights.length;
  const leftMax = new Array(n).fill(0);
  const rightMax = new Array(n).fill(0);
  
  // Build left max
  for (let i = 0; i < n; i++) {
    leftMax[i] = i === 0 ? heights[i] : Math.max(leftMax[i - 1], heights[i]);
  }
  
  // Build right max
  for (let i = n - 1; i >= 0; i--) {
    rightMax[i] = i === n - 1 ? heights[i] : Math.max(rightMax[i + 1], heights[i]);
  }
  
  // Calculate water
  let water = 0;
  for (let i = 0; i < n; i++) {
    water += Math.min(leftMax[i], rightMax[i]) - heights[i];
  }
  
  return water;
}
```

---

## Question 2: Two Pointer Rain Water (Meta)
**"Solve water trapping with O(1) extra space."**

### JS Clue 2.1
```javascript
// Use two pointers instead of arrays
// Track leftMax and rightMax as we move
```

### JS Clue 2.2
```javascript
// If leftMax < rightMax:
//   Process left side (water limited by leftMax)
//   Move left pointer
// Else:
//   Process right side
```

### Solution
```javascript
function trapWaterTwoPtr(heights) {
  let left = 0, right = heights.length - 1;
  let leftMax = 0, rightMax = 0;
  let water = 0;
  
  while (left < right) {
    if (heights[left] < heights[right]) {
      if (heights[left] >= leftMax) {
        leftMax = heights[left];
      } else {
        water += leftMax - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= rightMax) {
        rightMax = heights[right];
      } else {
        water += rightMax - heights[right];
      }
      right--;
    }
  }
  
  return water;
}
```

---

## Question 3: Container With Most Water (Uber)
**"Find maximum water container between two lines."**

### JS Clue 3.1
```javascript
// Similar to water trapping but simpler
// Area = width * min(height1, height2)
// Start from widest, move shorter side inward
```

### JS Clue 3.2
```javascript
// Two pointers at ends
// Move shorter side because taller can't increase min
```

### Solution
```javascript
function maxArea(heights) {
  let left = 0, right = heights.length - 1;
  let maxWater = 0;
  
  while (left < right) {
    const width = right - left;
    const height = Math.min(heights[left], heights[right]);
    maxWater = Math.max(maxWater, width * height);
    
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  
  return maxWater;
}
```

---

## Question 4: Candy Distribution (Amazon)
**"Given ratings, distribute candy. Children with higher rating than neighbor must have more candy."**

### JS Clue 4.1
```javascript
// Greedy approach:
// Pass left to right: if rating > left, candy = left + 1
// Pass right to left: if rating > right, candy = max(current, right + 1)
```

### JS Clue 4.2
```javascript
// Two passes:
// 1. Left to right: ensure higher rating gets more than left
// 2. Right to left: ensure higher rating gets more than right
```

### Solution
```javascript
function candy(ratings) {
  const n = ratings.length;
  const candies = new Array(n).fill(1);
  
  // Left to right pass
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }
  
  // Right to left pass
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }
  
  return candies.reduce((a, b) => a + b, 0);
}
```

---

## Question 5: Maximum Width Ramp (Microsoft)
**"Find maximum width ramp in array. Ramp exists if i < j and A[i] <= A[j]."**

### JS Clue 5.1
```javascript
// Want max j - i where A[i] <= A[j]
// Sort indices by value, then find max distance
```

### JS Clue 5.2
```javascript
// Approach 1: Stack for decreasing values
// Approach 2: Sort indices, find max gap
```

### Solution
```javascript
// Stack approach
function maxWidthRamp(A) {
  const stack = [];
  let maxWidth = 0;
  
  // Build decreasing stack
  for (let i = 0; i < A.length; i++) {
    if (stack.length === 0 || A[i] < A[stack[stack.length - 1]]) {
      stack.push(i);
    }
  }
  
  // Find max width
  for (let j = A.length - 1; j >= 0; j--) {
    while (stack.length > 0 && A[j] >= A[stack[stack.length - 1]]) {
      maxWidth = Math.max(maxWidth, j - stack.pop());
    }
    if (stack.length === 0) break;
  }
  
  return maxWidth;
}
```

---

## Question 6: Building Skyline (Google)
**"Given building heights, compute the silhouette."**

### JS Clue 6.1
```javascript
// Use priority queue / heap
// Process all critical points (left and right edges)
// Track current height
```

### JS Clue 6.2
```javascript
// Create events: [x, height, isStart]
// Sort by x, then by height (starts before ends)
// Use max heap to track active buildings
```

### Solution
```javascript
function getSkyline(buildings) {
  const events = [];
  
  for (const [L, R, H] of buildings) {
    events.push([L, H, true]);   // Start
    events.push([R, H, false]);  // End
  }
  
  events.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[2] ? -1 : 1; // Starts before ends at same x
  });
  
  const result = [];
  const active = [];
  let prev = 0;
  
  for (const [x, h, isStart] of events) {
    if (isStart) {
      active.push(h);
    } else {
      const idx = active.indexOf(h);
      active.splice(idx, 1);
    }
    
    const curr = active.length === 0 ? 0 : Math.max(...active);
    
    if (curr !== prev) {
      result.push([x, curr]);
      prev = curr;
    }
  }
  
  return result;
}
```

---

## Key Takeaways

```
┌─────────────────────────────────────────────────────────┐
│            TRAPPING RAIN WATER VARIATIONS               │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  CORE PATTERN: min(maxLeft, maxRight) - height         │
│                 Water limited by SHORTER boundary       │
│                                                         │
│  VARIATIONS:                                            │
│  1. Basic water trapping (precomputed arrays)           │
│  2. O(1) space (two pointers)                          │
│  3. Container with most water (different formula)      │
│  4. Candy distribution (two-pass greedy)               │
│  5. Maximum width ramp (stack + greedy)               │
│  6. Building skyline (sweeping + heap)                 │
│                                                         │
│  CONNECTED INSIGHT:                                    │
│  - Water container: taller line limits area            │
│  - Rain water: shorter boundary limits water           │
│  - Both involve boundary comparisons                   │
│                                                         │
│  KEY INSIGHT: "Min of maxes" pattern                   │
│               For each position, look at boundaries    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Keywords that signal this pattern**: "Trapping water", "Elevation map", "Level", "Boundary", "Limited by", "Silhouette"
