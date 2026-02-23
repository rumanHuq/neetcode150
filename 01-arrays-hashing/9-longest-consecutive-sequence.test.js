import { describe, test, expect } from "bun:test";
import longestConsecutive from "./longest-consecutive-sequence.js";

describe("Longest Consecutive Sequence", () => {
  test("finds longest consecutive sequence", () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
  });

  test("returns 0 for empty array", () => {
    expect(longestConsecutive([])).toBe(0);
  });

  test("handles single element", () => {
    expect(longestConsecutive([1])).toBe(1);
  });

  test("handles consecutive numbers", () => {
    expect(longestConsecutive([1, 2, 3, 4, 5])).toBe(5);
  });
});
