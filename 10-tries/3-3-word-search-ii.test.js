import { describe, test, expect } from "bun:test";
import findWords from "./word-search-ii.js.js";

describe("212. Word Search II", () => {
  test("should find words in board", () => {
    const board = [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"],
    ];
    const words = ["oath", "pea", "eat", "rain"];
    const result = findWords(board, words);
    expect(result).toContain("oath");
    expect(result).toContain("eat");
  });

  test("should find single word", () => {
    const board = [["a", "b"], ["a", "a"]];
    const words = ["aaa", "aaab", "aba", "baa"];
    const result = findWords(board, words);
    expect(result).toContain("aba");
    expect(result).toContain("baa");
  });

  test("should return empty when no words found", () => {
    const board = [["a", "b"], ["c", "d"]];
    const words = ["ef", "gh"];
    const result = findWords(board, words);
    expect(result).toEqual([]);
  });

  test("should handle duplicate words in result", () => {
    const board = [["a", "a"]];
    const words = ["a"];
    const result = findWords(board, words);
    expect(result).toEqual(["a"]);
  });

  test("should find words in single row", () => {
    const board = [["a", "b", "c"]];
    const words = ["abc", "ab", "bc", "c"];
    const result = findWords(board, words);
    expect(result).toContain("abc");
    expect(result).toContain("ab");
    expect(result).toContain("bc");
    expect(result).toContain("c");
  });

  test("should handle single cell board", () => {
    const board = [["a"]];
    const words = ["a"];
    const result = findWords(board, words);
    expect(result).toEqual(["a"]);
  });

  test("should find word using cells once", () => {
    const board = [["a", "b"], ["c", "d"]];
    const words = ["abc", "abd", "acd"];
    const result = findWords(board, words);
    expect(result).toContain("abd");
    expect(result).toContain("acd");
  });
});
