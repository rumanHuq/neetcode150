import { describe, it, expect } from "bun:test";
import findRedundantConnection from "./redundant-connection.js";

describe("redundant-connection", () => {
  it("should find the redundant connection", () => {
    const edges = [[1, 2], [1, 3], [2, 3]];
    const result = findRedundantConnection(edges);
    expect(result).toEqual([2, 3]);
  });

  it("should handle tree with added edge", () => {
    const edges = [[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]];
    const result = findRedundantConnection(edges);
    expect(result).toEqual([1, 4]);
  });

  it("should handle multiple redundant edges", () => {
    const edges = [[1, 2], [2, 3], [3, 1]];
    const result = findRedundantConnection(edges);
    expect(result).toEqual([3, 1]);
  });

  it("should handle simple case", () => {
    const edges = [[1, 2]];
    const result = findRedundantConnection(edges);
    expect(result).toEqual([]);
  });
});
