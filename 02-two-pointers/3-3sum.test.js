import { describe, test, expect } from "bun:test";
import { threeSum } from "./3-3sum-exercise.js";

describe("3Sum", () => {
  test("finds all triplets that sum to zero", () => {
    const result = threeSum([-1, 0, 1, 2, -1, -4]);
    expect(result).toContainEqual([-1, -1, 2]);
    expect(result).toContainEqual([-1, 0, 1]);
    expect(result.length).toBe(2);
  });

  test("returns empty array for no solution", () => {
    expect(threeSum([1, 2, 3])).toEqual([]);
  });

  test("handles empty array", () => {
    expect(threeSum([])).toEqual([]);
  });
});
