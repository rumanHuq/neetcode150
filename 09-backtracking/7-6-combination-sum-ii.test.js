import { describe, test, expect } from "bun:test";
import combinationSum2 from "./combination-sum-ii.js";

describe("Combination Sum II", () => {
  test("finds combinations for [10,1,2,7,6,1,5] target 8", () => {
    const result = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
    expect(result.length).toBe(4);
    expect(result).toContainEqual([1, 1, 6]);
    expect(result).toContainEqual([1, 2, 5]);
    expect(result).toContainEqual([1, 7]);
    expect(result).toContainEqual([2, 6]);
  });
});
