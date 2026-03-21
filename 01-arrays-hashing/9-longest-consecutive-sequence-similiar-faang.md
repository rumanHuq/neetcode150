# FAANG Interview Variations: Longest Consecutive Sequence

**Core Concept**: Use HashSet for O(1) lookup to find consecutive sequences

---

## Question 1: Warm-Up (Google)
**"You have conference sessions with start and end times. Find the minimum number of rooms needed."**

### JS Clue 1.1
```javascript
// Meeting rooms problem
// Two meetings overlap if one starts before other ends
// Find maximum number of overlapping meetings
```

### JS Clue 1.2
```javascript
// Approach 1: Sort by start time, use min-heap for end times
// Approach 2: Sweep line - count starts and ends
```

### Solution
```javascript
function minMeetingRooms(intervals) {
  if (intervals.length === 0) return 0;
  
  const starts = intervals.map(i => i[0]).sort((a, b) => a - b);
  const ends = intervals.map(i => i[1]).sort((a, b) => a - b);
  
  let rooms = 0;
  let endPtr = 0;
  
  for (let i = 0; i < starts.length; i++) {
    if (starts[i] < ends[endPtr]) {
      rooms++;
    } else {
      endPtr++;
    }
  }
  
  return rooms;
}
```

---

## Question 2: Longest Band (Amazon)
**"You have an array of integers. A 'band' is a subsequence where numbers are consecutive (diff of 1). Find length of longest band."**

### JS Clue 2.1
```javascript
// Similar to longest consecutive sequence
// But subsequence (not necessarily contiguous in array)
// Band: 1, 2, 3, 4 (can skip elements in between in original array)
```

### JS Clue 2.2
```javascript
// Put all in Set for O(1) lookup
// For each num, check if num-1 exists
// If not, it's the start of a band - count forward
```

### Solution
```javascript
function longestBand(nums) {
  const numSet = new Set(nums);
  let longest = 0;
  
  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let curr = num;
      let streak = 1;
      
      while (numSet.has(curr + 1)) {
        curr++;
        streak++;
      }
      
      longest = Math.max(longest, streak);
    }
  }
  
  return longest;
}
```

---

## Question 3: Maximum Length of Consecutive Subsequence (Microsoft)
**"Given an unsorted array, find the length of longest consecutive subsequence."**

### JS Clue 3.1
```javascript
// Same as Leetcode 128
// Subsequence (not subarray) - can skip elements
// Put in Set, find starts, count consecutive
```

### JS Clue 3.2
```javascript
// Key: Only count if num-1 doesn't exist (it's a start)
// Then count num+1, num+2, etc.
```

### Solution
```javascript
function longestConsecutive(nums) {
  if (nums.length === 0) return 0;
  
  const numSet = new Set(nums);
  let longest = 0;
  
  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let curr = num;
      let streak = 1;
      
      while (numSet.has(curr + 1)) {
        curr++;
        streak++;
      }
      
      longest = Math.max(longest, streak);
    }
  }
  
  return longest;
}
```

---

## Question 4: Continuous Subarray Sum (Meta)
**"Given an array of integers and a target k, find if there's a continuous subarray of size at least 2 that sums to a multiple of k."**

### JS Clue 4.1
```javascript
// Sum of subarray [i, j] = prefix[j+1] - prefix[i]
// Want: (prefix[j+1] - prefix[i]) % k === 0
// Which means: prefix[j+1] % k === prefix[i] % k
```

### JS Clue 4.2
```javascript
// Use prefix sum modulo k
// If same remainder appears twice (with distance >= 2), found it
```

### Solution
```javascript
function checkSubarraySum(nums, k) {
  const map = new Map();
  map.set(0, -1); // Initialize with remainder 0 at index -1
  
  let sum = 0;
  
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const mod = k === 0 ? sum : sum % k;
    
    if (map.has(mod)) {
      if (i - map.get(mod) > 1) return true;
    } else {
      map.set(mod, i);
    }
  }
  
  return false;
}
```

---

## Question 5: Find Missing Ranges (Apple)
**"Given a sorted array and a range [lower, upper], return all missing ranges between lower and upper."**

### JS Clue 5.1
```javascript
// Find gaps in the array within [lower, upper]
// Example: [0, 1, 3, 50, 75], lower=0, upper=99
// Missing: "2", "4->49", "51->74", "76->99"
```

### JS Clue 5.2
```javascript
// Compare each element with expected value
// Track prev (starts as lower)
// If curr > prev, there's a gap
```

### Solution
```javascript
function findMissingRanges(nums, lower, upper) {
  const result = [];
  let prev = lower - 1; // Start before lower
  
  for (let i = 0; i <= nums.length; i++) {
    const curr = i === nums.length ? upper + 1 : nums[i];
    
    if (curr - prev > 1) {
      const start = prev + 1;
      const end = curr - 1;
      result.push(formatRange(start, end));
    }
    
    prev = curr;
  }
  
  return result;
}

function formatRange(start, end) {
  return start === end ? String(start) : `${start}->${end}`;
}
```

---

## Question 6: Asteroid Collision (Netflix)
**"Given asteroids moving left/right, determine what happens when they collide."**

### JS Clue 6.1
```javascript
// Positive = moving right, Negative = moving left
// Collision: right-moving hits left-moving
// Larger survives, equal both destroyed
```

### JS Clue 6.2
```javascript
// Use stack to simulate
// When new asteroid moving left:
// - Pop and destroy right-moving ones
// - If stack empty or top moving left, push it
```

### Solution
```javascript
function asteroidCollision(asteroids) {
  const stack = [];
  
  for (const ast of asteroids) {
    let alive = true;
    
    while (alive && stack.length > 0 && ast < 0 && stack[stack.length - 1] > 0) {
      const top = stack[stack.length - 1];
      
      if (top < -ast) {
        stack.pop(); // Top destroyed, continue checking
      } else if (top === -ast) {
        stack.pop(); // Both destroyed
        alive = false;
      } else {
        alive = false; // Top survives
      }
    }
    
    if (alive) stack.push(ast);
  }
  
  return stack;
}
```

---

## Question 7: Sequence Reconstruction (Uber)
**"Check if a sequence can be uniquely reconstructed from a set of subsequences."**

### JS Clue 7.1
```javascript
// Given original sequence and list of subsequences
// Reconstruct if subsequences determine unique ordering
```

### JS Clue 7.2
```javascript
// Build graph from subsequences (ordering constraints)
// Topological sort to verify unique reconstruction
```

### Solution
```javascript
function sequenceReconstruction(org, seqs) {
  const graph = new Map();
  const indegree = new Map();
  
  // Initialize
  for (const num of org) {
    graph.set(num, []);
    indegree.set(num, 0);
  }
  
  // Build graph
  for (const seq of seqs) {
    for (let i = 0; i < seq.length; i++) {
      if (!graph.has(seq[i])) return false;
      if (i > 0) {
        if (!graph.has(seq[i - 1])) return false;
        graph.get(seq[i - 1]).push(seq[i]);
        indegree.set(seq[i], indegree.get(seq[i]) + 1);
      }
    }
  }
  
  // Topological sort
  const queue = [];
  let count = 0;
  
  for (const [num, deg] of indegree) {
    if (deg === 0) queue.push(num);
  }
  
  while (queue.length === 1) {
    const node = queue.shift();
    count++;
    
    for (const neighbor of graph.get(node)) {
      indegree.set(neighbor, indegree.get(neighbor) - 1);
      if (indegree.get(neighbor) === 0) queue.push(neighbor);
    }
  }
  
  return count === org.length;
}
```

---

## Key Takeaways

```
┌─────────────────────────────────────────────────────────┐
│        LONGEST CONSECUTIVE SEQUENCE VARIATIONS          │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  CORE PATTERN: Set + find sequence starts               │
│                 O(1) lookup for consecutive elements   │
│                                                         │
│  VARIATIONS:                                            │
│  1. Meeting rooms (overlap counting)                   │
│  2. Longest band (subsequence, not subarray)           │
│  3. Longest consecutive (contiguous)                    │
│  4. Continuous subarray sum (prefix mod)               │
│  5. Missing ranges (find gaps in sorted)               │
│  6. Asteroid collision (stack simulation)             │
│  7. Sequence reconstruction (topological sort)         │
│                                                         │
│  KEY INSIGHT: "Consecutive" = elements differ by 1    │
│               Set enables O(1) neighbor lookup         │
│               Only start at sequence beginning          │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Keywords that signal this pattern**: "Consecutive", "Longest streak", "Sequence", "Missing", "Overlap", "Collision", "Reconstruction"
