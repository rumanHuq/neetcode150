import { describe, test, expect } from "bun:test";
import minimumInterval from "./minimum-interval-queries.js";

describe("Minimum Interval Queries", () => {
  test("finds minimum interval for each query", () => {
    expect(minimumInterval([[1, 4], [2, 4], [3, 4], [4, 5]], [2, 3, 4, 5])).toEqual([2, 1, 1, 1]);
  });

  test("returns -1 when no interval contains query", () => {
    expect(minimumInterval([[1, 4], [2, 4], [3, 4]], [5, 6])).toEqual([-1, -1]);
  });

  test("handles single interval", () => {
    expect(minimumInterval([[1, 3], [2, 4]], [2])).toEqual([2]);
  });
});
