import { describe, it, expect } from "bun:test";
import rob from "./3-house-robber-ii.js";

describe("rob", () => {
  it("should return the value for single house", () => {
    expect(rob([5])).toBe(5);
  });

  it("should return max of two houses", () => {
    expect(rob([2, 3, 2])).toBe(3);
  });

  it("should return max of non-adjacent houses in circle", () => {
    expect(rob([1, 2, 3, 1])).toBe(4);
  });

  it("should handle [1, 3, 1, 2, 1]", () => {
    expect(rob([1, 3, 1, 2, 1])).toBe(5);
  });
});