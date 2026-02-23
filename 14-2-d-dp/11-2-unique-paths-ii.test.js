import { describe, test, expect } from "bun:test";
import uniquePathsWithObstacles from "../14-2-d-dp/unique-paths-ii";

describe("unique-paths-ii", () => {
  test("grid with obstacles", () => {
    expect(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]])).toBe(2);
  });

  test("grid with obstacle at start", () => {
    expect(uniquePathsWithObstacles([[1, 0]])).toBe(0);
  });

  test("grid with obstacle at end", () => {
    expect(uniquePathsWithObstacles([[0, 1], [0, 0]])).toBe(1);
  });

  test("single cell no obstacle", () => {
    expect(uniquePathsWithObstacles([[0]])).toBe(1);
  });

  test("single cell with obstacle", () => {
    expect(uniquePathsWithObstacles([[1]])).toBe(0);
  });

  test("two rows with obstacle", () => {
    expect(uniquePathsWithObstacles([[0, 0], [0, 1]])).toBe(0);
  });
});
