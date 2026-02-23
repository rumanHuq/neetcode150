import { describe, it, expect } from "bun:test";
import findTargetSumWays from "./12-target-sum.js";

describe("findTargetSumWays", () => {
  it("should return 1 for [1,1,1,1,1] target 3", () => {
    expect(findTargetSumWays([1, 1, 1, 1, 1], 3)).toBe(5);
  });

  it("should return 0 for [1,2,7,9,981] target 1000000000", () => {
    expect(findTargetSumWays([1, 2, 7, 9, 981], 1000000000)).toBe(0);
  });

  it("should return 1 for [0,0,0,0,0] target 0", () => {
    expect(findTargetSumWays([0, 0, 0, 0, 0], 0)).toBe(32);
  });

  it("should handle single element", () => {
    expect(findTargetSumWays([1], 1)).toBe(1);
    expect(findTargetSumWays([1], -1)).toBe(1);
  });
});