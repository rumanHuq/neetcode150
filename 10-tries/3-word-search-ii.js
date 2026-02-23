class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
    this.word = '';
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEnd = true;
    node.word = word;
  }
}

function findWords(board, words) {
  const result = [];
  const trie = new Trie();

  for (const word of words) {
    trie.insert(word);
  }

  function dfs(row, col, node) {
    if (row < 0 || row >= board.length || 
        col < 0 || col >= board[0].length ||
        board[row][col] === '#' ||
        !node.children[board[row][col]]) {
      return;
    }

    const char = board[row][col];
    const nextNode = node.children[char];

    if (nextNode.isEnd) {
      result.push(nextNode.word);
      nextNode.isEnd = false;
    }

    board[row][col] = '#';

    dfs(row + 1, col, nextNode);
    dfs(row - 1, col, nextNode);
    dfs(row, col + 1, nextNode);
    dfs(row, col - 1, nextNode);

    board[row][col] = char;
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      dfs(row, col, trie.root);
    }
  }

  return result;
}

export default findWords;
