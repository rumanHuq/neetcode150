import { describe, test, expect } from "bun:test";
import { twoSum } from "./2-two-sum-ii-exercise.js";

describe("Two Sum II", () => {
  test("finds two numbers that add to target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
  });

  test("finds numbers at different positions", () => {
    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
  });

  test("handles edge case", () => {
    expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
  });
});
