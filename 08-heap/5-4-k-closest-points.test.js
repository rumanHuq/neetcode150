import { describe, test, expect } from "bun:test";
import kClosest from "./k-closest-points.js.js";

describe("973. K Closest Points to Origin", () => {
  test("should return k closest points", () => {
    const points = [[1, 3], [-2, 2], [2, -2]];
    const result = kClosest(points, 2);
    expect(result.length).toBe(2);
  });

  test("should return points sorted by distance", () => {
    const points = [[3, 3], [5, -1], [-2, 4]];
    const result = kClosest(points, 2);
    expect(result).toContainEqual([3, 3]);
    expect(result).toContainEqual([-2, 4]);
  });

  test("should handle k equals total points", () => {
    const points = [[1, 1], [2, 2], [3, 3]];
    const result = kClosest(points, 3);
    expect(result.length).toBe(3);
  });

  test("should handle origin points", () => {
    const points = [[0, 0], [1, 1], [2, 2]];
    const result = kClosest(points, 1);
    expect(result).toContainEqual([0, 0]);
  });

  test("should handle negative coordinates", () => {
    const points = [[-1, -1], [-2, -2], [1, 1]];
    const result = kClosest(points, 2);
    expect(result.length).toBe(2);
    expect(result).toContainEqual([1, 1]);
  });
});
