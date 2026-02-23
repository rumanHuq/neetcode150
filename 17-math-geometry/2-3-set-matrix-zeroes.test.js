import { describe, test, expect } from "bun:test";
import setZeroes from "./set-matrix-zeroes.js";

describe("Set Matrix Zeroes", () => {
  test("sets row and column to zero", () => {
    const matrix = [
      [1, 2, 3],
      [4, 0, 6],
      [7, 8, 9],
    ];
    setZeroes(matrix);
    expect(matrix).toEqual([
      [1, 0, 3],
      [0, 0, 0],
      [7, 0, 9],
    ]);
  });

  test("handles multiple zeros", () => {
    const matrix = [
      [1, 2, 0],
      [4, 0, 6],
      [7, 8, 9],
    ];
    setZeroes(matrix);
    expect(matrix).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [7, 0, 0],
    ]);
  });

  test("handles zero in first row and column", () => {
    const matrix = [
      [0, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    setZeroes(matrix);
    expect(matrix).toEqual([
      [0, 0, 0],
      [0, 5, 6],
      [0, 8, 9],
    ]);
  });
});
