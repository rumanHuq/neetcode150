import { describe, test, expect } from "bun:test";
import eraseOverlapIntervals from "./non-overlapping-intervals.js";

describe("Non-overlapping Intervals", () => {
  test("finds minimum removals", () => {
    expect(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])).toBe(1);
  });

  test("handles empty intervals", () => {
    expect(eraseOverlapIntervals([])).toBe(0);
  });

  test("handles no overlaps", () => {
    expect(eraseOverlapIntervals([[1, 2], [3, 4]])).toBe(0);
  });
});
