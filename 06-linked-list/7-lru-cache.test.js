import { describe, test, expect } from "bun:test";
import LRUCache from "./lru-cache.js";

describe("lru-cache", () => {
  test("get and put operations", () => {
    const cache = new LRUCache(2);
    
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1);
    
    cache.put(3, 3);
    expect(cache.get(2)).toBe(-1);
    
    cache.put(4, 4);
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(3)).toBe(3);
    expect(cache.get(4)).toBe(4);
  });

  test("updates existing key", () => {
    const cache = new LRUCache(2);
    
    cache.put(1, 1);
    cache.put(2, 2);
    cache.put(1, 10);
    
    expect(cache.get(1)).toBe(10);
  });

  test("evicts least recently used", () => {
    const cache = new LRUCache(2);
    
    cache.put(1, 1);
    cache.put(2, 2);
    cache.get(1);
    cache.put(3, 3);
    
    expect(cache.get(1)).toBe(1);
    expect(cache.get(2)).toBe(-1);
  });

  test("handles capacity 1", () => {
    const cache = new LRUCache(1);
    
    cache.put(1, 1);
    cache.put(2, 2);
    
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(2)).toBe(2);
  });

  test("get returns -1 for missing key", () => {
    const cache = new LRUCache(2);
    
    expect(cache.get(1)).toBe(-1);
  });
});
