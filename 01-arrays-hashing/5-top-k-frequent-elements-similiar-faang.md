# FAANG Interview Variations: Top K Frequent Elements

**Core Concept**: Count frequencies, then extract top k using sorting or heap

---

## Question 1: Warm-Up (Google)
**"Your music streaming app shows your top 5 most played songs. Given play counts, return the top k artists."**

### JS Clue 1.1
```javascript
// Same concept: count frequencies, extract top k
// Here: artists have play counts, we need top k by count
```

### JS Clue 1.2
```javascript
// Step 1: Aggregate play counts per artist
// Step 2: Sort by count (descending)
// Step 3: Take first k
```

### Solution
```javascript
function topKArtists(plays, k) {
  const count = {};
  for (const { artist, playCount } of plays) {
    count[artist] = (count[artist] || 0) + playCount;
  }
  
  return Object.entries(count)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([artist]) => artist);
}
```

---

## Question 2: K Most Frequent Words (Uber)
**"Given a paragraph, return the k most frequent words (excluding common stop words)."**

### JS Clue 2.1
```javascript
// Count word frequencies
// But need to handle: case insensitivity, punctuation
// And filter out stop words
```

### JS Clue 2.2
```javascript
// Stop words: "the", "a", "an", "is", etc.
// After counting, sort by (freq, reverse alphabetical) for tie-breaking
```

### Solution
```javascript
function topKFrequentWords(paragraph, k) {
  const stopWords = new Set(['the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been']);
  
  const words = paragraph
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/);
  
  const count = {};
  for (const word of words) {
    if (stopWords.has(word)) continue;
    count[word] = (count[word] || 0) + 1;
  }
  
  return Object.entries(count)
    .sort((a, b) => b[1] !== a[1] ? b[1] - a[1] : a[0].localeCompare(b[0]))
    .slice(0, k)
    .map(([word]) => word);
}
```

---

## Question 3: K Closest Points to Origin (Amazon)
**"Given n points, return the k points closest to origin (0,0)."**

### JS Clue 3.1
```javascript
// Not about frequency, but about sorting by distance
// Distance = sqrt(x² + y²), but we can skip sqrt for comparison
```

### JS Clue 3.2
```javascript
// Approach 1: Sort all by distance, take first k - O(n log n)
// Approach 2: Use heap (max heap of size k) - O(n log k)
```

### Solution
```javascript
// Approach 1: Sort
function kClosestSort(points, k) {
  return points
    .map(([x, y]) => ({ x, y, dist: x*x + y*y }))
    .sort((a, b) => a.dist - b.dist)
    .slice(0, k);
}

// Approach 2: Max Heap of size k
function kClosestHeap(points, k) {
  const maxHeap = [];
  
  for (const [x, y] of points) {
    const dist = x*x + y*y;
    
    if (maxHeap.length < k) {
      maxHeap.push({ x, y, dist });
      maxHeap.sort((a, b) => b.dist - a.dist);
    } else if (dist < maxHeap[0].dist) {
      maxHeap[0] = { x, y, dist };
      maxHeap.sort((a, b) => b.dist - a.dist);
    }
  }
  
  return maxHeap.map(({ x, y }) => [x, y]);
}
```

---

## Question 4: Sort Characters by Frequency (Microsoft)
**"Given a string, sort characters by frequency in descending order."**

### JS Clue 4.1
```javascript
// Count character frequencies
// Then sort characters by count (descending)
// Join back to string
```

### JS Clue 4.2
```javascript
// Bucket sort approach: frequencies are bounded
// If string length = n, max frequency = n
// Use array of buckets indexed by frequency
```

### Solution
```javascript
// Sort-based
function frequencySort(str) {
  const count = {};
  for (const char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  
  return str
    .split('')
    .sort((a, b) => count[b] - count[a])
    .join('');
}

// Bucket sort (O(n))
function frequencySortBucket(str) {
  const count = {};
  const buckets = [];
  
  for (const char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  
  for (const [char, freq] of Object.entries(count)) {
    if (!buckets[freq]) buckets[freq] = [];
    buckets[freq].push(char);
  }
  
  let result = '';
  for (let freq = buckets.length - 1; freq >= 0; freq--) {
    if (buckets[freq]) {
      result += buckets[freq].join('').repeat(freq);
    }
  }
  
  return result;
}
```

---

## Question 5: Top K Largest Numbers in Stream (Netflix)
**"Design a class that continuously receives numbers and always returns the k largest numbers seen so far."**

### JS Clue 5.1
```javascript
// Data structure challenge: maintain top k efficiently
// For each new number:
//   - If smaller than min of top k, ignore
//   - Otherwise, add and remove smallest if size > k
```

### JS Clue 5.2
```javascript
// Min-heap is perfect:
// - Root is smallest in heap
// - When heap size > k, pop root (removes smallest)
// - O(log k) per insertion
```

### Solution
```javascript
class TopKStream {
  constructor(k) {
    this.k = k;
    this.heap = [];
  }
  
  add(num) {
    if (this.heap.length < this.k) {
      this.heap.push(num);
      this.heap.sort((a, b) => a - b); // Min at index 0
    } else if (num > this.heap[0]) {
      this.heap[0] = num;
      this.heap.sort((a, b) => a - b);
    }
  }
  
  getTopK() {
    return [...this.heap].sort((a, b) => b - a);
  }
}
```

---

## Question 6: Frequency Sort with Special Order (Apple)
**"Sort elements by frequency, if frequencies match, order by numerical value."**

### JS Clue 6.1
```javascript
// Count frequencies first
// Then sort by [freq DESC, value ASC]
```

### JS Clue 6.2
```javascript
// Example: [1, 1, 2, 2, 3]
// 1: freq 2, 2: freq 2, 3: freq 1
// Result: [1, 2, 3] (1 and 2 have same freq, 1 < 2)
```

### Solution
```javascript
function frequencySort(nums) {
  const count = {};
  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
  }
  
  return nums.sort((a, b) => {
    const freqDiff = count[b] - count[a];
    if (freqDiff !== 0) return freqDiff;
    return a - b;
  });
}
```

---

## Key Takeaways

```
┌─────────────────────────────────────────────────────────┐
│           TOP K FREQUENT VARIATIONS                     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  CORE PATTERN: Count + Sort/Extract Top K              │
│                                                         │
│  APPROACHES:                                            │
│  1. Sort all, slice k - O(n log n)                     │
│  2. Heap (max heap of size k) - O(n log k)             │
│  3. Bucket sort - O(n) (when range is bounded)         │
│                                                         │
│  VARIATIONS:                                            │
│  1. K most frequent (by count)                         │
│  2. K most frequent WORDS (with filters)               │
│  3. K closest (by distance, not frequency)             │
│  4. Sort by frequency (return sorted)                  │
│  5. Stream processing (continuous top k)               │
│  6. Tie-breaking rules                                 │
│                                                         │
│  KEY INSIGHT: "Top K" = heap OR sort + slice           │
│               Heap better for streams or large n       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Keywords that signal this pattern**: "Top K", "Most frequent", "K largest", "K closest", "K smallest", "Sort by frequency"
