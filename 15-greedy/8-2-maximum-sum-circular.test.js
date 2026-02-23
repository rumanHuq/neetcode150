import { describe, test, expect } from "bun:test";
import maxSubarraySumCircular from "./maximum-sum-circular.js";

describe("Maximum Sum Circular Subarray", () => {
  test("finds maximum circular sum", () => {
    expect(maxSubarraySumCircular([1, -2, 3, -2])).toBe(3);
  });

  test("handles single element", () => {
    expect(maxSubarraySumCircular([5])).toBe(5);
  });

  test("handles all negative", () => {
    expect(maxSubarraySumCircular([-2, -3, -1])).toBe(-1);
  });
});
