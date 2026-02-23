import { describe, test, expect } from "bun:test";
import { minCostConnectPoints } from "./min-cost-connect-points.js";

describe("min-cost-connect-points", () => {
  test("example 1", () => {
    const points = [[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]];
    expect(minCostConnectPoints(points)).toBe(20);
  });

  test("example 2", () => {
    const points = [[3, 12], [-2, 5], [-4, 1]];
    expect(minCostConnectPoints(points)).toBe(18);
  });

  test("single point", () => {
    const points = [[0, 0]];
    expect(minCostConnectPoints(points)).toBe(0);
  });

  test("two points", () => {
    const points = [[0, 0], [3, 4]];
    expect(minCostConnectPoints(points)).toBe(7);
  });

  test("three points in line", () => {
    const points = [[0, 0], [1, 0], [2, 0]];
    expect(minCostConnectPoints(points)).toBe(2);
  });

  test("four points square", () => {
    const points = [[0, 0], [0, 1], [1, 0], [1, 1]];
    expect(minCostConnectPoints(points)).toBe(3);
  });

  test("four points diamond", () => {
    const points = [[0, 0], [2, 2], [0, 4], [4, 2]];
    expect(minCostConnectPoints(points)).toBe(10);
  });
});
