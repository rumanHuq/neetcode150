import { describe, it, expect } from "bun:test";
import countComponents from "./connected-components.js";

describe("connected-components", () => {
  it("should count connected components", () => {
    const n = 5;
    const edges = [[0, 1], [1, 2], [3, 4]];
    expect(countComponents(n, edges)).toBe(2);
  });

  it("should return n for no edges", () => {
    const n = 3;
    const edges = [];
    expect(countComponents(n, edges)).toBe(3);
  });

  it("should return 1 for fully connected graph", () => {
    const n = 4;
    const edges = [[0, 1], [1, 2], [2, 3], [3, 0]];
    expect(countComponents(n, edges)).toBe(1);
  });

  it("should handle single node", () => {
    const n = 1;
    const edges = [];
    expect(countComponents(n, edges)).toBe(1);
  });

  it("should handle multiple edges connecting same nodes", () => {
    const n = 4;
    const edges = [[0, 1], [1, 2], [2, 0], [2, 3]];
    expect(countComponents(n, edges)).toBe(1);
  });
});
