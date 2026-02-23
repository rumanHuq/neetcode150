import { describe, test, expect } from "bun:test";
import spiralOrder from "./spiral-matrix.js";

describe("Spiral Matrix", () => {
  test("returns elements in spiral order 3x3", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(spiralOrder(matrix)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  test("returns elements in spiral order 3x4", () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ];
    expect(spiralOrder(matrix)).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
  });

  test("returns elements in spiral order 1x4", () => {
    const matrix = [[1, 2, 3, 4]];
    expect(spiralOrder(matrix)).toEqual([1, 2, 3, 4]);
  });

  test("returns elements in spiral order 4x1", () => {
    const matrix = [[1], [2], [3], [4]];
    expect(spiralOrder(matrix)).toEqual([1, 2, 3, 4]);
  });
});
