import { describe, test, expect } from "bun:test";
import maxSubArray from "./maximum-subarray.js";

describe("Maximum Subarray", () => {
  test("finds maximum subarray", () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  test("handles single element", () => {
    expect(maxSubArray([1])).toBe(1);
  });

  test("handles all negative", () => {
    expect(maxSubArray([-1, -2, -3])).toBe(-1);
  });
});
