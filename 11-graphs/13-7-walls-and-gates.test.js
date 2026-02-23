import { describe, it, expect } from "bun:test";
import wallsAndGates from "./walls-and-gates.js";

describe("walls-and-gates", () => {
  it("should calculate distances to gates", () => {
    const rooms = [
      [Infinity, -1, 0, Infinity],
      [Infinity, Infinity, Infinity, -1],
      [Infinity, -1, Infinity, -1],
      [0, -1, Infinity, Infinity],
    ];
    wallsAndGates(rooms);
    expect(rooms[0][2]).toBe(0);
    expect(rooms[3][0]).toBe(0);
    expect(rooms[0][1]).toBe(-1);
  });

  it("should handle empty grid", () => {
    expect(wallsAndGates([])).toBeUndefined();
    expect(wallsAndGates(null)).toBeUndefined();
  });

  it("should handle no gates", () => {
    const rooms = [
      [Infinity, Infinity],
      [Infinity, Infinity],
    ];
    wallsAndGates(rooms);
    expect(rooms[0][0]).toBe(Infinity);
    expect(rooms[1][1]).toBe(Infinity);
  });

  it("should handle single gate", () => {
    const rooms = [[0]];
    wallsAndGates(rooms);
    expect(rooms[0][0]).toBe(0);
  });
});
