import { describe, it, expect } from "bun:test";
import numIslands from "./number-of-islands.js";

describe("number-of-islands", () => {
  it("should count islands in a basic grid", () => {
    const grid = [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ];
    expect(numIslands(grid)).toBe(1);
  });

  it("should count multiple islands", () => {
    const grid = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ];
    expect(numIslands(grid)).toBe(3);
  });

  it("should return 0 for empty grid", () => {
    expect(numIslands([])).toBe(0);
    expect(numIslands(null)).toBe(0);
  });

  it("should return 0 for water only grid", () => {
    const grid = [
      ["0", "0", "0"],
      ["0", "0", "0"],
    ];
    expect(numIslands(grid)).toBe(0);
  });
});
