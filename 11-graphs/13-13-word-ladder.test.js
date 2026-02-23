import { describe, it, expect } from "bun:test";
import ladderLength from "./word-ladder.js";

describe("word-ladder", () => {
  it("should find shortest transformation length", () => {
    const beginWord = "hit";
    const endWord = "cog";
    const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
    expect(ladderLength(beginWord, endWord, wordList)).toBe(5);
  });

  it("should return 0 if endWord not in wordList", () => {
    const beginWord = "hit";
    const endWord = "cog";
    const wordList = ["hot", "dot", "dog", "lot", "log"];
    expect(ladderLength(beginWord, endWord, wordList)).toBe(0);
  });

  it("should return 2 for adjacent words", () => {
    const beginWord = "hit";
    const endWord = "cog";
    const wordList = ["hot", "dot", "dog", "lot", "log", "cog", "hit"];
    expect(ladderLength(beginWord, endWord, wordList)).toBe(5);
  });

  it("should handle no transformation possible", () => {
    const beginWord = "hit";
    const endWord = "cog";
    const wordList = ["hot", "dot", "dog"];
    expect(ladderLength(beginWord, endWord, wordList)).toBe(0);
  });

  it("should handle beginWord already equals endWord", () => {
    const beginWord = "hit";
    const endWord = "hit";
    const wordList = ["hit"];
    expect(ladderLength(beginWord, endWord, wordList)).toBe(1);
  });
});
