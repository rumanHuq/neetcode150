import { describe, it, expect } from "bun:test";
import rob from "./2-house-robber.js";

describe("rob", () => {
  it("should return 0 for empty array", () => {
    expect(rob([])).toBe(0);
  });

  it("should return the value for single house", () => {
    expect(rob([5])).toBe(5);
  });

  it("should return max of non-adjacent houses", () => {
    expect(rob([1, 2, 3, 1])).toBe(4);
  });

  it("should return correct value for [2, 7, 9, 3, 1]", () => {
    expect(rob([2, 7, 9, 3, 1])).toBe(12);
  });
});