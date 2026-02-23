import { describe, test, expect } from "bun:test";
import mergeIntervals from "./merge-intervals.js";

describe("Merge Intervals", () => {
  test("merges overlapping intervals", () => {
    expect(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([[1, 6], [8, 10], [15, 18]]);
  });

  test("handles non-overlapping intervals", () => {
    expect(mergeIntervals([[1, 4], [4, 5]])).toEqual([[1, 5]]);
  });

  test("handles single interval", () => {
    expect(mergeIntervals([[1, 4]])).toEqual([[1, 4]]);
  });
});
