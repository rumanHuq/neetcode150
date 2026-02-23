import { describe, test, expect } from "bun:test";
import findMin from "./find-minimum-rotated-sorted-array.js";

describe("Find Minimum in Rotated Sorted Array", () => {
  test("finds minimum element", () => {
    expect(findMin([3, 4, 5, 1, 2])).toBe(1);
  });

  test("handles non-rotated array", () => {
    expect(findMin([1, 2, 3, 4, 5])).toBe(1);
  });
});
