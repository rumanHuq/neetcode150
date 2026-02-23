import { describe, it, expect } from "bun:test";
import wordBreak from "./9-word-break.js";

describe("wordBreak", () => {
  it("should return true for 'leetcode' with ['leet', 'code']", () => {
    expect(wordBreak("leetcode", ["leet", "code"])).toBe(true);
  });

  it("should return false for 'catsandog' with ['cats', 'dog', 'sand', 'and', 'cat']", () => {
    expect(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])).toBe(false);
  });

  it("should return true for 'applepenapple' with ['apple', 'pen']", () => {
    expect(wordBreak("applepenapple", ["apple", "pen"])).toBe(true);
  });

  it("should return false for empty wordDict", () => {
    expect(wordBreak("leetcode", [])).toBe(false);
  });
});