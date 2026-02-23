import { describe, it, expect } from "bun:test";
import maxAreaOfIsland from "./max-area-island.js";

describe("max-area-island", () => {
  it("should find max area of island", () => {
    const grid = [
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [0, 1, 1, 0, 1, 0, 0, 0, 0, 0],
    ];
    expect(maxAreaOfIsland(grid)).toBe(4);
  });

  it("should return 0 for no islands", () => {
    const grid = [
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(maxAreaOfIsland(grid)).toBe(0);
  });

  it("should return 0 for empty grid", () => {
    expect(maxAreaOfIsland([])).toBe(0);
    expect(maxAreaOfIsland(null)).toBe(0);
  });

  it("should handle single cell island", () => {
    const grid = [[1]];
    expect(maxAreaOfIsland(grid)).toBe(1);
  });
});
