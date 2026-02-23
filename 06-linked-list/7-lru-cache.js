/**
 * 146. LRU Cache
 * https://leetcode.com/problems/lru-cache/
 * 
 * Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
 * Implement the LRUCache class:
 * - LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
 * - int get(int key) Return the value of the key if it exists, otherwise return -1.
 * - void put(int key, int value) Update the value of the key if it exists.
 *   Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity,
 *   evict the least recently used key.
 */
class ListNode {
  constructor(key = 0, value = 0, prev = null, next = null) {
    this.key = key;
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();

    this.head = new ListNode();
    this.tail = new ListNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  addToFront(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  moveToFront(node) {
    this.remove(node);
    this.addToFront(node);
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const node = this.cache.get(key);
    this.moveToFront(node);
    return node.value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      node.value = value;
      this.moveToFront(node);
    } else {
      const newNode = new ListNode(key, value);
      this.cache.set(key, newNode);
      this.addToFront(newNode);

      if (this.cache.size > this.capacity) {
        const lruNode = this.tail.prev;
        this.cache.delete(lruNode.key);
        this.remove(lruNode);
      }
    }
  }
}

export default LRUCache;
