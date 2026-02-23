import { describe, it, expect } from "bun:test";
import pacificAtlantic from "./pacific-atlantic-flow.js";

describe("pacific-atlantic-flow", () => {
  it("should find cells that can reach both oceans", () => {
    const heights = [
      [1, 2, 2, 3, 5],
      [3, 2, 3, 4, 4],
      [2, 4, 5, 3, 1],
      [6, 7, 1, 4, 5],
      [5, 1, 1, 2, 4],
    ];
    const result = pacificAtlantic(heights);
    expect(result.length).toBe(7);
  });

  it("should return empty array for empty input", () => {
    expect(pacificAtlantic([])).toEqual([]);
    expect(pacificAtlantic(null)).toEqual([]);
  });

  it("should handle single cell that reaches both", () => {
    const heights = [[1]];
    const result = pacificAtlantic(heights);
    expect(result).toEqual([[0, 0]]);
  });

  it("should return empty when no cell reaches both", () => {
    const heights = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ];
    const result = pacificAtlantic(heights);
    expect(result.length).toBe(7);
  });
});
