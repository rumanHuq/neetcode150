import { describe, test, expect } from "bun:test";
import { swimInWater } from "./swim-rising-water.js";

describe("swim-rising-water", () => {
  test("example 1", () => {
    const grid = [[0, 2], [1, 3]];
    expect(swimInWater(grid)).toBe(3);
  });

  test("example 2", () => {
    const grid = [[0, 1, 2, 3, 4], [24, 23, 22, 21, 5], [12, 13, 14, 15, 16], [11, 17, 18, 19, 20], [10, 9, 8, 7, 6]];
    expect(swimInWater(grid)).toBe(16);
  });

  test("single cell", () => {
    const grid = [[0]];
    expect(swimInWater(grid)).toBe(0);
  });

  test("two by two increasing", () => {
    const grid = [[0, 1], [2, 3]];
    expect(swimInWater(grid)).toBe(3);
  });

  test("two by two decreasing", () => {
    const grid = [[3, 2], [1, 0]];
    expect(swimInWater(grid)).toBe(3);
  });

  test("uniform values", () => {
    const grid = [[5, 5, 5], [5, 5, 5], [5, 5, 5]];
    expect(swimInWater(grid)).toBe(5);
  });

  test("path through middle", () => {
    const grid = [[5, 1, 5], [5, 0, 5], [5, 1, 5]];
    expect(swimInWater(grid)).toBe(5);
  });

  test("3x3 with clear path", () => {
    const grid = [[0, 2, 3], [1, 2, 0], [2, 0, 1]];
    expect(swimInWater(grid)).toBe(2);
  });
});
