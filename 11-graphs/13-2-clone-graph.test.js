import { describe, it, expect } from "bun:test";
import cloneGraph from "./clone-graph.js";

describe("clone-graph", () => {
  it("should clone a basic graph", () => {
    const node1 = { val: 1, neighbors: [] };
    const node2 = { val: 2, neighbors: [] };
    const node3 = { val: 3, neighbors: [] };
    node1.neighbors = [node2, node3];
    node2.neighbors = [node1, node3];
    node3.neighbors = [node1, node2];

    const cloned = cloneGraph(node1);

    expect(cloned).not.toBe(node1);
    expect(cloned.val).toBe(1);
    expect(cloned.neighbors.length).toBe(2);
  });

  it("should return null for null input", () => {
    expect(cloneGraph(null)).toBe(null);
  });

  it("should clone a single node with no neighbors", () => {
    const node = { val: 1, neighbors: [] };
    const cloned = cloneGraph(node);

    expect(cloned).not.toBe(node);
    expect(cloned.val).toBe(1);
    expect(cloned.neighbors.length).toBe(0);
  });
});
