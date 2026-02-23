import { describe, test, expect } from "bun:test";
import findKthLargest from "./kth-largest-element.js.js";

describe("215. Kth Largest Element in an Array", () => {
  test("should find kth largest element", () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 1)).toBe(6);
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 6)).toBe(1);
  });

  test("should handle duplicates", () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5], 1)).toBe(5);
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5], 5)).toBe(3);
  });

  test("should handle negative numbers", () => {
    expect(findKthLargest([-1, -2, -3, -4, -5], 2)).toBe(-2);
  });

  test("should handle k=1", () => {
    expect(findKthLargest([1], 1)).toBe(1);
  });
});
