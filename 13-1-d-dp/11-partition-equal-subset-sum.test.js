import { describe, it, expect } from "bun:test";
import canPartition from "./11-partition-equal-subset-sum.js";

describe("canPartition", () => {
  it("should return true for [1,5,11,5]", () => {
    expect(canPartition([1, 5, 11, 5])).toBe(true);
  });

  it("should return false for [1,2,3,5]", () => {
    expect(canPartition([1, 2, 3, 5])).toBe(false);
  });

  it("should return true for [2,2,3,5]", () => {
    expect(canPartition([2, 2, 3, 5])).toBe(false);
  });

  it("should return true for single element array with same halves", () => {
    expect(canPartition([1, 1])).toBe(true);
  });

  it("should return false for odd sum array", () => {
    expect(canPartition([1, 2, 3])).toBe(false);
  });
});