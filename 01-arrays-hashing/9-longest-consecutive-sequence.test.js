import { describe, test, expect } from "bun:test";
import { longestConsecutive } from "./9-longest-consecutive-sequence-exercise.js";

describe("Longest Consecutive Sequence", () => {
  test("finds longest consecutive sequence", () => {
    expect(longestConsecutive([0,3,2,5,4,6,1,1])).toBe(7);
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
