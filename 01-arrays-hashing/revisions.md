# 01-Arrays & Hashing - Revision Guide

## Table of Contents

1. [Hash Map for O(1) Lookup](#1-hash-map-for-o1-lookup)
2. [Frequency Counting](#2-frequency-counting)
3. [Prefix/Suffix Technique](#3-prefixsuffix-technique)
4. [Set for Sequence Detection](#4-set-for-sequence-detection)
5. [Grid/Box Indexing](#5-gridbox-indexing)
6. [Length-Prefix Encoding](#6-length-prefix-encoding)

---

## 1. Hash Map for O(1) Lookup

### Concept

Store elements you've seen in a HashMap/Set. When you encounter an element, check if it exists - O(1) lookup.

### Pseudocode

```pseudocode
seen = empty hashmap
for each element in array:
    if element in seen:
        return true / return indices
    add element to seen
return false
```

### Key Variations

| Variation | Trigger | HashMap Use |
| ---------- | ------- | ------------ |
| Contains Duplicate | "any duplicate" | Set (just existence) |
| Two Sum | "two numbers add to X" | Map val → index |
| Longest Consecutive | "consecutive sequence" | Set for O(1) lookup |

### Conceptual JS Snippet

```javascript
// HashMap stores: key = element, value = something useful
map.set(currentElement, usefulValue)
complement = target - currentElement
if map.has(complement) → found!
```

- **Time:** O(n), **Space:** O(n)
- **Trigger:** "duplicate", "exists", "add to target", "pair"

---

## 2. Frequency Counting

### Concept

Count how many times each element appears. Then process based on counts.

### Pseudocode

```
count = empty hashmap
for each element:
    count[element]++

// Now use counts
for each key in count:
    if count[key] == k: ...
    sort by count[key]
```

### Key Variations

| Problem | What to Count | Key Insight |
|---------|---------------|-------------|
| Valid Anagram | Characters in string | Same count = anagram |
| Group Anagrams | Character signature | Same signature → same group |
| Top K Frequent | Element frequencies | Sort by frequency |

### Conceptual JS Snippet

```javascript
// Count frequencies
freq[element] = (freq[element] || 0) + 1

// For grouping: key = normalized form
key = sorted characters OR count array
map[key].push(element)
```

- **Time:** O(n), **Space:** O(n)
- **Trigger:** "most frequent", "group by", "anagram"

---

## 3. Prefix/Suffix Technique

### Concept

Build cumulative information from left-to-right, then right-to-left. Combine both passes.

### Pseudocode

```
result = array of 1s
prefix = 1
for i from 0 to n-1:
    result[i] = prefix
    prefix *= arr[i]

suffix = 1
for i from n-1 to 0:
    result[i] *= suffix
    suffix *= arr[i]
```

### When to Use

- "Product of all elements except self"
- "Sum of all elements to the left"
- Any problem asking for "all elements except current" without using division

### Conceptual JS Snippet

```javascript
// Pass 1: product of everything LEFT of i
// Pass 2: multiply by product of everything RIGHT of i
result[i] = leftProduct * rightProduct
```

- **Time:** O(n), **Space:** O(1) output
- **Trigger:** "except self", "without division", "left and right"

---

## 4. Set for Sequence Detection

### Concept

Put all elements in a Set for O(1) lookup. To find sequences, start ONLY from the beginning (element - 1 not in set).

### Pseudocode

```
set = all elements

for each num in set:
    if (num - 1) not in set:        // START of sequence
        current = num
        length = 1
        while (current + 1) in set:
            current++
            length++
        maxLength = max(maxLength, length)
```

### Key Insight

Don't start counting from middle of sequence - you'll redo work. Only start from smallest element.

- **Time:** O(n), **Space:** O(n)
- **Trigger:** "longest consecutive", "longest run", "sequence"

---

## 5. Grid/Box Indexing

### Concept

For grids (like Sudoku), track rows, columns, and boxes separately. Map (row, col) to box index.

### Box Index Formula

```
boxRow = row / 3 (integer division)
boxCol = col / 3 (integer division)
boxIndex = boxRow * 3 + boxCol
// Or: (row/3)*3 + (col/3)
```

### Visual

```
 0 1 2 | 3 4 5 | 6 7 8
--------+--------+-------
 0      |   1   |   2   (box row 0)
--------+--------+-------
 3      |   4   |   5   (box row 1)
--------+--------+-------
 6      |   7   |   8   (box row 2)
```

### Conceptual JS Snippet

```javascript
// Three collections to track
rows[9] = sets, cols[9] = sets, boxes[9] = sets

boxIndex = floor(r/3)*3 + floor(c/3)
if val in rows[r] OR cols[c] OR boxes[boxIndex]: invalid
```

- **Time:** O(1) fixed grid, **Space:** O(1)
- **Trigger:** "valid sudoku", "no duplicates in row/col/box", "3x3 grid"

---

## 6. Length-Prefix Encoding

### Concept

When encoding variable-length strings, prepend length so you know where each string ends during decoding.

### Encode Pseudocode

```
for each string:
    output = length + "#" + string
join all outputs
```

### Decode Pseudocode

```
i = 0
while i < length of encoded:
    find "#" at position j
    len = parseInt(encoded[i:j])
    string = encoded[j+1 : j+1+len]
    add string to result
    i = j + 1 + len
```

### Why This Works

- "#" acts as delimiter (can't be in string length)
- Length tells you exactly how many chars to read

- **Time:** O(n), **Space:** O(n)
- **Trigger:** "encode/decode strings", "serialize", "delimiter"

---

## Interview Quick Reference

### Pattern → Problem Recognition

| Pattern | Interview Trigger Words |
|---------|------------------------|
| HashMap Lookup | "duplicate", "exists", "pair", "add to target" |
| Frequency Count | "most frequent", "group by", "anagram", "count" |
| Prefix/Suffix | "except self", "without division", "left × right" |
| Set Sequence | "consecutive", "longest run", "sequence" |
| Grid/Box | "3x3", "sudoku", "row/col/box" |
| Length Prefix | "encode", "decode", "serialize" |

### Complexity At a Glance

| Technique | Time | Space |
|-----------|------|-------|
| HashMap lookup | O(n) | O(n) |
| Frequency count | O(n) | O(n) |
| Prefix-Suffix | O(n) | O(1)* |
| Set sequence | O(n) | O(n) |
| Grid validation | O(1) | O(1) |

*excluding output array

---

## Mental Checklist for Arrays & Hashing

1. **Need O(1) lookups?** → Use Set or Map
2. **Counting things?** → Use frequency hashmap
3. **Finding pairs/triplets?** → HashMap with complement
4. **Grouping by property?** → Use property as map key
5. **Sequences/consecutive?** → Put in Set, only start from begin
6. **Product except self?** → Prefix × Suffix (no division!)
7. **Grid validation?** → Track row, col, box separately
8. **Variable strings?** → Length-prefix encoding
