import { describe, test, expect, beforeEach } from "bun:test";
import Trie from "./implement-trie.js.js";

describe("208. Implement Trie (Prefix Tree)", () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  test("should insert words", () => {
    trie.insert("apple");
    expect(trie.search("apple")).toBe(true);
  });

  test("should search exact word", () => {
    trie.insert("apple");
    expect(trie.search("apple")).toBe(true);
    expect(trie.search("app")).toBe(false);
    expect(trie.search("appl")).toBe(false);
  });

  test("should find words with prefix", () => {
    trie.insert("apple");
    trie.insert("app");
    expect(trie.startsWith("app")).toBe(true);
    expect(trie.startsWith("appl")).toBe(true);
    expect(trie.startsWith("ap")).toBe(true);
    expect(trie.startsWith("ban")).toBe(false);
  });

  test("should handle empty string", () => {
    trie.insert("");
    expect(trie.search("")).toBe(true);
    expect(trie.startsWith("")).toBe(true);
  });

  test("should handle multiple inserts", () => {
    trie.insert("dog");
    trie.insert("door");
    trie.insert("do");
    expect(trie.search("dog")).toBe(true);
    expect(trie.search("door")).toBe(true);
    expect(trie.search("do")).toBe(true);
    expect(trie.search("d")).toBe(false);
  });
});
