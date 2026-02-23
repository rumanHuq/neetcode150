import { describe, test, expect } from "bun:test";
import findMinArrowShots from "./minimum-arrows-burst-balloons.js";

describe("Minimum Arrows to Burst Balloons", () => {
  test("finds minimum arrows", () => {
    expect(findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]])).toBe(2);
  });

  test("handles overlapping intervals", () => {
    expect(findMinArrowShots([[1, 2], [2, 3], [3, 4]])).toBe(2);
  });

  test("handles single interval", () => {
    expect(findMinArrowShots([[1, 2]])).toBe(1);
  });
});
