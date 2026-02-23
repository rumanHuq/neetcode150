import { describe, test, expect } from "bun:test";
import rotate from "./rotate-image.js";

describe("Rotate Image", () => {
  test("rotates 2x2 matrix", () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    rotate(matrix);
    expect(matrix).toEqual([
      [3, 1],
      [4, 2],
    ]);
  });

  test("rotates 3x3 matrix", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    rotate(matrix);
    expect(matrix).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });

  test("rotates 4x4 matrix", () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    rotate(matrix);
    expect(matrix).toEqual([
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4],
    ]);
  });
});
