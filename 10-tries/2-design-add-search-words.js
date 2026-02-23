class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEnd = true;
  }

  search(word) {
    return this._searchDFS(this.root, word, 0);
  }

  _searchDFS(node, word, index) {
    if (index === word.length) {
      return node.isEnd;
    }

    const char = word[index];

    if (char === '.') {
      for (const child of Object.values(node.children)) {
        if (this._searchDFS(child, word, index + 1)) {
          return true;
        }
      }
      return false;
    } else {
      if (!node.children[char]) {
        return false;
      }
      return this._searchDFS(node.children[char], word, index + 1);
    }
  }
}

export default WordDictionary;
