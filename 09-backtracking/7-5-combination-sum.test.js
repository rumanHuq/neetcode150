import { describe, test, expect } from "bun:test";
import combinationSum from "./combination-sum.js";

describe("Combination Sum", () => {
  test("finds combinations for [2,3,6,7] target 7", () => {
    const result = combinationSum([2, 3, 6, 7], 7);
    expect(result).toContainEqual([2, 2, 3]);
    expect(result).toContainEqual([7]);
    expect(result.length).toBe(2);
  });

  test("finds combinations for [2,3,5] target 8", () => {
    const result = combinationSum([2, 3, 5], 8);
    expect(result.length).toBe(3);
  });
});
