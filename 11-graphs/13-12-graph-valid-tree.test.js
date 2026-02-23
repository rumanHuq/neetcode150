import { describe, it, expect } from "bun:test";
import validTree from "./graph-valid-tree.js";

describe("graph-valid-tree", () => {
  it("should return true for valid tree", () => {
    const n = 5;
    const edges = [[0, 1], [0, 2], [0, 3], [1, 4]];
    expect(validTree(n, edges)).toBe(true);
  });

  it("should return false for cycle", () => {
    const n = 5;
    const edges = [[0, 1], [1, 2], [2, 0], [0, 3], [3, 4]];
    expect(validTree(n, edges)).toBe(false);
  });

  it("should return false for disconnected graph", () => {
    const n = 5;
    const edges = [[0, 1], [2, 3]];
    expect(validTree(n, edges)).toBe(false);
  });

  it("should return true for single node with no edges", () => {
    const n = 1;
    const edges = [];
    expect(validTree(n, edges)).toBe(true);
  });

  it("should return false for too many edges", () => {
    const n = 3;
    const edges = [[0, 1], [1, 2], [0, 2]];
    expect(validTree(n, edges)).toBe(false);
  });
});
