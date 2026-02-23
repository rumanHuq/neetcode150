import { describe, it, expect } from "bun:test";
import lengthOfLIS from "./10-longest-increasing-subsequence.js";

describe("lengthOfLIS", () => {
  it("should return 0 for empty array", () => {
    expect(lengthOfLIS([])).toBe(0);
  });

  it("should return 1 for single element", () => {
    expect(lengthOfLIS([10])).toBe(1);
  });

  it("should return 4 for [10,9,2,5,3,7,101,18]", () => {
    expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
  });

  it("should handle already sorted array", () => {
    expect(lengthOfLIS([1, 2, 3, 4, 5])).toBe(5);
  });
});