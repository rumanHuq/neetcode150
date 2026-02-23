import { describe, test, expect } from "bun:test";
import findMedianSortedArrays from "./median-of-two-sorted-arrays.js";

describe("Median of Two Sorted Arrays", () => {
  test("finds median of two arrays", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  });

  test("handles even length", () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  });
});
