# FAANG Interview Variations: Encode and Decode Strings

**Core Concept**: Encode length/size to handle variable-length data without delimiters

---

## Question 1: Warm-Up (Google)
**"Design an encoding for a list of integers where each integer can be multi-digit (not just 0-9)."**

### JS Clue 1.1
```javascript
// Unlike strings (char-based), integers need explicit length markers
// Approach: length#integer,length#integer,...
```

### JS Clue 1.2
```javascript
// Encode: For each num, store its length then '#' then the number
// Decode: Read length, skip '#', read that many characters
```

### Solution
```javascript
function encode(nums) {
  return nums.map(n => `${String(n).length}#${n}`).join('');
}

function decode(str) {
  const result = [];
  let i = 0;
  
  while (i < str.length) {
    let j = str.indexOf('#', i);
    const len = parseInt(str.substring(i, j));
    result.push(parseInt(str.substring(j + 1, j + 1 + len)));
    i = j + 1 + len;
  }
  
  return result;
}
```

---

## Question 2: Compress String (Meta)
**"Given a string, encode it by counting consecutive repeated characters."**

### JS Clue 2.1
```javascript
// "aaabbc" -> "a3b2c1"
// "abcd" -> "a1b1c1d1" (or just return as is)
```

### JS Clue 2.2
```javascript
// Count consecutive characters
// Append char + count
// Handle single chars (count = 1)
```

### Solution
```javascript
function compressString(str) {
  if (str.length === 0) return '';
  
  let result = '';
  let count = 1;
  
  for (let i = 1; i <= str.length; i++) {
    if (i < str.length && str[i] === str[i - 1]) {
      count++;
    } else {
      result += str[i - 1] + count;
      count = 1;
    }
  }
  
  return result;
}

function decompressString(comp) {
  let result = '';
  let i = 0;
  
  while (i < comp.length) {
    const char = comp[i];
    let countStr = '';
    i++;
    while (i < comp.length && /\d/.test(comp[i])) {
      countStr += comp[i];
      i++;
    }
    result += char.repeat(parseInt(countStr));
  }
  
  return result;
}
```

---

## Question 3: Run-Length Encoding (Amazon)
**"Implement run-length encoding and decoding for image data represented as strings of pixels."**

### JS Clue 3.1
```javascript
// RLE for images: counts can be large
// Format: count + pixel value
// Example: "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWB" -> "12W1B12W3B24W1B"
```

### JS Clue 3.2
```javascript
// Encode: count consecutive same pixels
// Decode: Read count, repeat that pixel
```

### Solution
```javascript
function encodePixels(pixels) {
  if (pixels.length === 0) return '';
  
  let result = '';
  let count = 1;
  
  for (let i = 1; i <= pixels.length; i++) {
    if (i < pixels.length && pixels[i] === pixels[i - 1]) {
      count++;
    } else {
      result += count + pixels[i - 1];
      count = 1;
    }
  }
  
  return result;
}

function decodePixels(encoded) {
  let result = '';
  let i = 0;
  
  while (i < encoded.length) {
    let countStr = '';
    while (i < encoded.length && /\d/.test(encoded[i])) {
      countStr += encoded[i];
      i++;
    }
    const pixel = encoded[i];
    result += pixel.repeat(parseInt(countStr));
    i++;
  }
  
  return result;
}
```

---

## Question 4: Serialize/Deserialize Binary Tree (Uber)
**"Serialize a binary tree to string and deserialize it back."**

### JS Clue 4.1
```javascript
// Binary tree nodes have left and right children
// Need to represent null nodes to reconstruct
// Approach: Preorder traversal with null markers
```

### JS Clue 4.2
```javascript
// Serialize: Preorder traversal, add 'X' for null
// Deserialize: Parse preorder, rebuild recursively
```

### Solution
```javascript
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function serialize(root) {
  if (!root) return 'X,';
  return root.val + ',' + serialize(root.left) + serialize(root.right);
}

function deserialize(data) {
  const arr = data.split(',');
  
  function build() {
    const val = arr.shift();
    if (val === 'X') return null;
    const node = new TreeNode(parseInt(val));
    node.left = build();
    node.right = build();
    return node;
  }
  
  return build();
}
```

---

## Question 5: Design Logging System (Netflix)
**"Design a logging system that stores variable-length log entries. Implement append and read operations."**

### JS Clue 5.1
```javascript
// Logs are variable length
// Need offset-based access
// Use length-prefix to know where each log ends
```

### JS Clue 5.2
```javascript
// Store: [length][content] for each log
// Maintain index of log starts for O(1) access
```

### Solution
```javascript
class LogSystem {
  constructor() {
    this.logs = [];
    this.starts = [];
  }
  
  append(log) {
    this.logs.push(log);
    // Length prefix ensures we can read correctly
    this.starts.push(this.logs.reduce((a, b) => a + b.length, 0));
  }
  
  read(index) {
    if (index < 0 || index >= this.logs.length) return null;
    return this.logs[index];
  }
  
  // Get all logs as encoded string
  export() {
    return this.logs.map(log => `${log.length}#${log}`).join('');
  }
  
  // Import from encoded string
  import(data) {
    let i = 0;
    while (i < data.length) {
      let j = data.indexOf('#', i);
      const len = parseInt(data.substring(i, j));
      const log = data.substring(j + 1, j + 1 + len);
      this.append(log);
      i = j + 1 + len;
    }
  }
}
```

---

## Question 6: File Chunking (Dropbox)
**"You have large files that need to be uploaded in chunks. Design encoding for chunk boundaries."**

### JS Clue 6.1
```javascript
// Chunks have variable sizes
// Need to reconstruct file from chunks
// Use length + chunk data format
```

### JS Clue 6.2
```javascript
// Encode: length + chunk + length + chunk + ...
// Decode: Read length, read that many bytes, repeat
```

### Solution
```javascript
class FileChunker {
  constructor(chunkSize = 1024) {
    this.chunkSize = chunkSize;
  }
  
  // Encode multiple chunks
  encodeChunks(chunks) {
    return chunks.map(chunk => `${chunk.length}#${chunk}`).join('');
  }
  
  // Decode back to chunks
  decodeChunks(data) {
    const chunks = [];
    let i = 0;
    
    while (i < data.length) {
      let j = data.indexOf('#', i);
      const len = parseInt(data.substring(i, j));
      chunks.push(data.substring(j + 1, j + 1 + len));
      i = j + 1 + len;
    }
    
    return chunks;
  }
  
  // Split file into chunks
  chunkFile(file) {
    const chunks = [];
    for (let i = 0; i < file.length; i += this.chunkSize) {
      chunks.push(file.slice(i, i + this.chunkSize));
    }
    return chunks;
  }
}
```

---

## Key Takeaways

```
┌─────────────────────────────────────────────────────────┐
│            ENCODE/DECODE VARIATIONS                     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  CORE PATTERN: Length-prefix encoding                   │
│                 Delimiter-safe encoding                  │
│                                                         │
│  WHY LENGTH-PREFIX?                                     │
│  - Delimiters can appear in data                        │
│  - Length tells us exactly how much to read             │
│  - No escaping needed                                   │
│                                                         │
│  VARIATIONS:                                            │
│  1. Variable-length integers (length#num)               │
│  2. Run-length encoding (char#count)                    │
│  3. Image pixel encoding (count#pixel)                   │
│  4. Tree serialization (preorder with null markers)     │
│  5. Log system (append + offset indexing)               │
│  6. File chunking (length + data)                       │
│                                                         │
│  KEY INSIGHT: "How much to read?" -> length prefix     │
│               "Where to split?" -> delimiter-based     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Keywords that signal this pattern**: "Encode", "Decode", "Serialize", "Deserialize", "Compress", "Chunk", "Variable length", "Boundaries"
