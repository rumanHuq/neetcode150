import { describe, test, expect } from "bun:test";
import searchMatrix from "./search-2d-matrix.js";

describe("Search 2D Matrix", () => {
  test("finds target in matrix", () => {
    const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
    expect(searchMatrix(matrix, 3)).toBe(true);
  });

  test("returns false when not found", () => {
    const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
    expect(searchMatrix(matrix, 13)).toBe(false);
  });
});
