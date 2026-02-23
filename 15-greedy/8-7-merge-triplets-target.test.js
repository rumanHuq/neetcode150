import { describe, test, expect } from "bun:test";
import mergeTriplets from "./merge-triplets-target.js";

describe("Merge Triplets to Form Target Triplet", () => {
  test("can form target", () => {
    expect(mergeTriplets([[2, 5, 3], [1, 8, 4], [1, 7, 5]], [2, 7, 5])).toBe(true);
  });

  test("cannot form target", () => {
    expect(mergeTriplets([[1, 3, 4], [2, 5, 8]], [2, 5, 8])).toBe(true);
  });

  test("returns false when not possible", () => {
    expect(mergeTriplets([[1, 2, 3], [4, 5, 6]], [5, 6, 7])).toBe(false);
  });
});
