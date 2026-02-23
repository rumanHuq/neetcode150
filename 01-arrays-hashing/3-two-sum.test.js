import { describe, test, expect } from "bun:test";
import twoSum from "./two-sum.js";

describe("Two Sum", () => {
  test("finds two numbers that add to target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test("finds two numbers with different indices", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test("finds duplicate values", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
