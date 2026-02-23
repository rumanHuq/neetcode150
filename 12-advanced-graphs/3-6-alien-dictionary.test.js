import { describe, test, expect } from "bun:test";
import { alienOrder } from "./alien-dictionary.js";

describe("alien-dictionary", () => {
  test("example 1", () => {
    const words = ["wrt", "wrf", "er", "ett", "rftt"];
    const result = alienOrder(words);
    expect(result).toContain("w");
    expect(result).toContain("r");
    expect(result).toContain("t");
    expect(result).toContain("f");
    expect(result).toContain("e");
  });

  test("example 2", () => {
    const words = ["z", "x"];
    const result = alienOrder(words);
    expect(result).toContain("z");
    expect(result).toContain("x");
    expect(result.length).toBe(2);
  });

  test("example 3", () => {
    const words = ["z", "x", "z"];
    expect(alienOrder(words)).toBe("");
  });

  test("two words simple", () => {
    const words = ["abc", "ab"];
    expect(alienOrder(words)).toBe("");
  });

  test("three words chain", () => {
    const words = ["ba", "bc", "bd"];
    const result = alienOrder(words);
    expect(result).toContain("b");
    expect(result).toContain("c");
    expect(result).toContain("d");
    expect(result.length).toBe(4);
  });

  test("single character", () => {
    const words = ["a"];
    expect(alienOrder(words)).toBe("a");
  });

  test("single word", () => {
    const words = ["abc"];
    expect(alienOrder(words)).toBe("abc");
  });

  test("words with unique letters", () => {
    const words = ["ac", "ab", "bc"];
    const result = alienOrder(words);
    expect(result).toContain("a");
    expect(result).toContain("b");
    expect(result).toContain("c");
  });

  test("complex order", () => {
    const words = ["操", "作", "系", "统"];
    const result = alienOrder(words);
    expect(result.length).toBe(4);
  });
});
