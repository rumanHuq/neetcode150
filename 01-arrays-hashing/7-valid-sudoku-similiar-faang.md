# FAANG Interview Variations: Valid Sudoku

**Core Concept**: Track validation across multiple dimensions (rows, columns, boxes)

---

## Question 1: Warm-Up (Google)
**"Check if a 3x3 Tic-Tac-Toe board is valid (no player has won illegally)."**

### JS Clue 1.1
```javascript
// Valid board rules:
// - X and O can alternate, O goes first
// - If X wins, there must be one more X than O
// - If O wins, X and O counts are equal
```

### JS Clue 1.2
```javascript
// 1. Check if both X and O can win (invalid)
// 2. Check win conditions for each player
// 3. Validate counts based on who won
```

### Solution
```javascript
function isValidTicTacToe(board) {
  let xCount = 0, oCount = 0;
  let xWins = false, oWins = false;
  
  const lines = [
    // Rows
    [[0,0],[0,1],[0,2]],
    [[1,0],[1,1],[1,2]],
    [[2,0],[2,1],[2,2]],
    // Cols
    [[0,0],[1,0],[2,0]],
    [[0,1],[1,1],[2,1]],
    [[0,2],[1,2],[2,2]],
    // Diagonals
    [[0,0],[1,1],[2,2]],
    [[0,2],[1,1],[2,0]],
  ];
  
  for (const row of board) {
    for (const cell of row) {
      if (cell === 'X') xCount++;
      else if (cell === 'O') oCount++;
    }
  }
  
  for (const line of lines) {
    const [a, b, c] = line.map(([r, co]) => board[r][co]);
    if (a !== '.' && a === b && b === c) {
      if (a === 'X') xWins = true;
      else oWins = true;
    }
  }
  
  if (xWins && oWins) return false;
  if (xWins && xCount !== oCount + 1) return false;
  if (oWins && xCount !== oCount) return false;
  if (!xWins && !oWins && xCount !== oCount + 1 && xCount !== oCount) return false;
  
  return true;
}
```

---

## Question 2: Duplicate in Row (Amazon)
**"Check if any row in a matrix contains duplicate numbers (ignoring zeros)."**

### JS Clue 2.1
```javascript
// Similar to Sudoku row checking
// For each row, track seen numbers
// If duplicate found -> invalid
```

### JS Clue 2.2
```javascript
// Use Set for each row
// If set.size < non-zero count -> duplicate exists
```

### Solution
```javascript
function hasDuplicateInRow(matrix) {
  for (const row of matrix) {
    const seen = new Set();
    for (const num of row) {
      if (num === 0) continue;
      if (seen.has(num)) return true;
      seen.add(num);
    }
  }
  return false;
}
```

---

## Question 3: Check Latin Square (Microsoft)
**"Determine if a 2D array is a valid Latin square (each number appears exactly once in each row and column)."**

### JS Clue 3.1
```javascript
// Latin square: n x n grid with numbers 1 to n
// Each row contains each number exactly once
// Each column contains each number exactly once
```

### JS Clue 3.2
```javascript
// Check rows: each should have all n unique numbers
// Check columns: each should have all n unique numbers
```

### Solution
```javascript
function isValidLatinSquare(grid) {
  const n = grid.length;
  
  // Check rows
  for (const row of grid) {
    const seen = new Set();
    for (const num of row) {
      if (num < 1 || num > n || seen.has(num)) return false;
      seen.add(num);
    }
  }
  
  // Check columns
  for (let col = 0; col < n; col++) {
    const seen = new Set();
    for (let row = 0; row < n; row++) {
      const num = grid[row][col];
      if (seen.has(num)) return false;
      seen.add(num);
    }
  }
  
  return true;
}
```

---

## Question 4: Validate Magic Square (Adobe)
**"A magic square is a 3x3 grid where sums of each row, column, and both diagonals are equal. Validate if given grid is a magic square."**

### JS Clue 4.1
```javascript
// Magic square requirements:
// 1. Contains numbers 1-9 exactly once
// 2. All rows, columns, diagonals sum to same value
```

### JS Clue 4.2
```javascript
// 1. Check all 9 numbers are present (1-9)
// 2. Check row sums
// 3. Check column sums
// 4. Check diagonal sums
```

### Solution
```javascript
function isMagicSquare(grid) {
  // Check numbers 1-9 are present
  const nums = grid.flat();
  const numSet = new Set(nums);
  if (numSet.size !== 9) return false;
  for (let i = 1; i <= 9; i++) {
    if (!numSet.has(i)) return false;
  }
  
  // Calculate target sum (center row as reference)
  const target = grid[1][0] + grid[1][1] + grid[1][2];
  
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (grid[i][0] + grid[i][1] + grid[i][2] !== target) return false;
  }
  
  // Check columns
  for (let j = 0; j < 3; j++) {
    if (grid[0][j] + grid[1][j] + grid[2][j] !== target) return false;
  }
  
  // Check diagonals
  if (grid[0][0] + grid[1][1] + grid[2][2] !== target) return false;
  if (grid[0][2] + grid[1][1] + grid[2][0] !== target) return false;
  
  return true;
}
```

---

## Question 5: Is Graph Bipartite (Meta)
**"Given a graph, determine if it can be colored with two colors such that no adjacent nodes share the same color."**

### JS Clue 5.1
```javascript
// Bipartite = can split into two sets A and B
// All edges go between A and B (never within same set)
// Similar to checking valid coloring
```

### JS Clue 5.2
```javascript
// BFS/DFS with coloring:
// - Color start node red
// - Color neighbors blue
// - If conflict -> not bipartite
```

### Solution
```javascript
function isBipartite(graph) {
  const colors = new Array(graph.length).fill(-1);
  
  for (let start = 0; start < graph.length; start++) {
    if (colors[start] !== -1) continue;
    
    colors[start] = 0;
    const queue = [start];
    
    while (queue.length > 0) {
      const node = queue.shift();
      
      for (const neighbor of graph[node]) {
        if (colors[neighbor] === -1) {
          colors[neighbor] = 1 - colors[node];
          queue.push(neighbor);
        } else if (colors[neighbor] === colors[node]) {
          return false;
        }
      }
    }
  }
  
  return true;
}
```

---

## Question 6: Word Search with Constraints (Apple)
**"Given a board and a list of words, find all words that can be formed by traversing adjacent cells (no cell reuse)."**

### JS Clue 6.1
```javascript
// DFS/backtracking problem
// For each word, try to find starting point that matches
// Then explore all paths
```

### JS Clue 6.2
```javascript
// Optimization: Build Trie for all words
// Then DFS from each cell, using Trie to prune
```

### Solution
```javascript
function findWords(board, words) {
  const result = [];
  const rows = board.length;
  const cols = board[0].length;
  
  // Build Trie
  class TrieNode {
    constructor() {
      this.children = {};
      this.word = null;
    }
  }
  
  const root = new TrieNode();
  for (const word of words) {
    let node = root;
    for (const char of word) {
      if (!node.children[char]) node.children[char] = new TrieNode();
      node = node.children[char];
    }
    node.word = word;
  }
  
  // DFS
  function dfs(r, c, node) {
    const char = board[r][c];
    if (!node.children[char]) return;
    
    node = node.children[char];
    if (node.word) {
      result.push(node.word);
      node.word = null;
    }
    
    board[r][c] = '#';
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
        dfs(nr, nc, node);
      }
    }
    board[r][c] = char;
  }
  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dfs(r, c, root);
    }
  }
  
  return result;
}
```

---

## Key Takeaways

```
┌─────────────────────────────────────────────────────────┐
│               VALID SUDOKU VARIATIONS                   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  CORE PATTERN: Track validation across multiple        │
│                 dimensions simultaneously               │
│                                                         │
│  VARIATIONS:                                            │
│  1. Tic-Tac-Toe validation (turns + win state)        │
│  2. Duplicate in row only                              │
│  3. Latin Square (rows + columns)                       │
│  4. Magic Square (specific sum validation)             │
│  5. Bipartite graph (two-coloring)                     │
│  6. Word search (path finding with constraints)        │
│                                                         │
│  KEY INSIGHT: Track state across multiple dimensions  │
│               Row/Col/Box = 3 dimensions                │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Keywords that signal this pattern**: "Validate", "Check rules", "No duplicates", "Each row/column", "Constraints", "Two-colorable", "Adjacent cells"
