# FAANG Interview Variations: Container With Most Water

**Core Concept**: Two pointers at edges, area limited by shorter line

---

## Question 1: Warm-Up (Google)
**"Given heights of people standing in two rows, find the largest area where they can pair up."**

### JS Clue 1.1
```javascript
// Two rows, want to pair people
// Height is limiting factor
// Similar to water container: shorter limits the pairing
```

### JS Clue 1.2
```javascript
// Two pointers from outer ends
// Move the shorter side to try to find taller
```

### Solution
```javascript
function maxPairingArea(row1, row2) {
  let left = 0;
  let right = row1.length - 1;
  let maxArea = 0;
  
  while (left < right) {
    const height = Math.min(row1[left], row2[right]);
    const width = right - left;
    const area = height * width;
    
    maxArea = Math.max(maxArea, area);
    
    if (row1[left] < row2[right]) {
      left++;
    } else {
      right--;
    }
  }
  
  return maxArea;
}
```

---

## Question 2: Trapping Rain Water II (Amazon)
**"Given a 2D grid of heights, find how much water can be trapped."**

### JS Clue 2.1
```javascript
// Similar to 1D water trapping but in 2D
// Use min-heap to process cells from boundary inward
```

### JS Clue 2.2
```javascript
// Start from boundary cells (can't trap water)
// BFS inward, track water trapped
// Water trapped = max(water level - height, 0)
```

### Solution
```javascript
function trapRainWater(heightMap) {
  if (heightMap.length < 3 || heightMap[0].length < 3) return 0;
  
  const m = heightMap.length;
  const n = heightMap[0].length;
  const visited = Array(m).fill().map(() => Array(n).fill(false));
  const heap = [];
  
  // Add boundary cells
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
        heap.push([heightMap[i][j], i, j]);
        visited[i][j] = true;
      }
    }
  }
  
  heap.sort((a, b) => a[0] - b[0]);
  
  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  let water = 0;
  
  while (heap.length > 0) {
    const [h, i, j] = heap.shift();
    
    for (const [di, dj] of dirs) {
      const ni = i + di;
      const nj = j + dj;
      
      if (ni >= 0 && ni < m && nj >= 0 && nj < n && !visited[ni][nj]) {
        visited[ni][nj] = true;
        
        if (heightMap[ni][nj] < h) {
          water += h - heightMap[ni][nj];
        }
        
        heap.push([Math.max(h, heightMap[ni][nj]), ni, nj]);
        heap.sort((a, b) => a[0] - b[0]);
      }
    }
  }
  
  return water;
}
```

---

## Question 3: Two Sum - Closest (Microsoft)
**"Given array and target, find two elements closest to target."**

### JS Clue 3.1
```javascript
// Not about area, but similar pattern
// Start from ends, move toward target
```

### JS Clue 3.2
```javascript
// Sort first
// Move pointers based on sum vs target
// Track closest difference
```

### Solution
```javascript
function twoSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let left = 0, right = nums.length - 1;
  let closest = nums[left] + nums[right];
  
  while (left < right) {
    const sum = nums[left] + nums[right];
    
    if (Math.abs(sum - target) < Math.abs(closest - target)) {
      closest = sum;
    }
    
    if (sum < target) left++;
    else if (sum > target) right--;
    else return target;
  }
  
  return closest;
}
```

---

## Question 4: Minimum Container Size (Uber)
**"Given heights, find minimum width container that can hold all water needed."**

### JS Clue 4.1
```javascript
// Not maximum, minimum!
// Find smallest width where area >= some threshold
```

### JS Clue 4.2
```javascript
// Two pointers approach
// As we move inward, width decreases
// We need sufficient height to compensate
```

### Solution
```javascript
function minContainerSize(heights, waterNeeded) {
  let left = 0, right = heights.length - 1;
  let minWidth = Infinity;
  
  while (left < right) {
    const height = Math.min(heights[left], heights[right]);
    const width = right - left;
    const area = height * width;
    
    if (area >= waterNeeded) {
      minWidth = Math.min(minWidth, width);
      
      // Move taller side to try smaller width
      if (heights[left] < heights[right]) {
        left++;
      } else {
        right--;
      }
    } else {
      // Need more water, move to potentially taller
      if (heights[left] < heights[right]) {
        left++;
      } else {
        right--;
      }
    }
  }
  
  return minWidth === Infinity ? -1 : minWidth;
}
```

---

## Question 5: Max Area in Histogram (Adobe)
**"Given histogram heights, find largest rectangle in histogram."**

### JS Clue 5.1
```javascript
// Not two pointers - use stack!
// Find max area rectangle
// Rectangle can span multiple bars
```

### JS Clue 5.2
```javascript
// Stack stores indices of increasing heights
// When decreasing, pop and calculate area
```

### Solution
```javascript
function largestRectangleArea(heights) {
  const stack = [];
  let maxArea = 0;
  
  for (let i = 0; i <= heights.length; i++) {
    const h = i === heights.length ? 0 : heights[i];
    
    while (stack.length > 0 && heights[stack[stack.length - 1]] > h) {
      const height = heights[stack.pop()];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }
    
    stack.push(i);
  }
  
  return maxArea;
}
```

---

## Question 6: Pour Water (Google)
**"Simulate water pouring between boundaries until water levelizes."**

### JS Clue 6.1
```javascript
// Given initial water distribution
// Water flows to lowest adjacent level
// Simulate until equilibrium
```

### JS Clue 6.2
```javascript
// Use heap to process from lowest level
// Track water accumulated at each position
```

### Solution
```javascript
function pourWater(terrain, volume, drops) {
  for (let d = 0; d < drops; d++) {
    let pos = findLowestInRange(terrain, d, 'left');
    const left = findLowestInRange(terrain, pos, 'left');
    const right = findLowestInRange(terrain, pos, 'right');
    
    if (terrain[left] < terrain[pos]) {
      terrain[left]++;
    } else if (terrain[right] < terrain[pos]) {
      terrain[right]++;
    } else {
      terrain[pos]++;
    }
  }
  
  return terrain;
}

function findLowestInRange(terrain, start, direction) {
  let lowest = start;
  
  if (direction === 'left') {
    for (let i = start - 1; i >= 0 && terrain[i] <= terrain[i + 1]; i--) {
      if (terrain[i] < terrain[lowest]) lowest = i;
    }
  } else {
    for (let i = start + 1; i < terrain.length && terrain[i] <= terrain[i - 1]; i++) {
      if (terrain[i] < terrain[lowest]) lowest = i;
    }
  }
  
  return lowest;
}
```

---

## Key Takeaways

```
┌─────────────────────────────────────────────────────────┐
│         CONTAINER WITH MOST WATER VARIATIONS            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  CORE PATTERN: Two pointers at edges                    │
│                 Area = width * min(height1, height2)    │
│                 Move shorter side (height is limiting)  │
│                                                         │
│  KEY INSIGHT: "Shorter side limits capacity"           │
│               Moving taller side CANNOT increase area   │
│                                                         │
│  VARIATIONS:                                            │
│  1. Pairing people (same area calculation)             │
│  2. 2D rain water (heap + boundary expansion)           │
│  3. Closest to target (two pointers on sorted)         │
│  4. Minimum width for given area                        │
│  5. Max rectangle in histogram (stack, not pointers)    │
│  6. Pour water simulation                               │
│                                                         │
│  PATTERN CONNECTIONS:                                   │
│  - Water container: max area                            │
│  - Rain water: min boundary level                       │
│  - Both use "shorter limits" insight                    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Keywords that signal this pattern**: "Container", "Water", "Area", "Height limits", "Maximum rectangle", "Level"
