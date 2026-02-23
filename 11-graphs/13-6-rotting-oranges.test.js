import { describe, it, expect } from "bun:test";
import orangesRotting from "./rotting-oranges.js";

describe("rotting-oranges", () => {
  it("should calculate minutes until all rot", () => {
    const grid = [
      [2, 1, 1],
      [1, 1, 0],
      [0, 1, 1],
    ];
    expect(orangesRotting(grid)).toBe(4);
  });

  it("should return 0 for no fresh oranges", () => {
    const grid = [
      [0, 0],
      [0, 0],
    ];
    expect(orangesRotting(grid)).toBe(0);
  });

  it("should return -1 when not all oranges can rot", () => {
    const grid = [
      [2, 1, 1],
      [0, 1, 1],
      [1, 0, 1],
    ];
    expect(orangesRotting(grid)).toBe(-1);
  });

  it("should return 0 for empty grid", () => {
    expect(orangesRotting([])).toBe(0);
    expect(orangesRotting(null)).toBe(0);
  });

  it("should handle single fresh orange", () => {
    const grid = [[1]];
    expect(orangesRotting(grid)).toBe(-1);
  });
});
