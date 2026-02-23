class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
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
  }

  search(word) {
    const node = this._findNode(word);
    return node !== null && node.isEnd;
  }

  startsWith(prefix) {
    return this._findNode(prefix) !== null;
  }

  _findNode(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) {
        return null;
      }
      node = node.children[char];
    }
    return node;
  }
}

export default Trie;
