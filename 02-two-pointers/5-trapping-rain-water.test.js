import { describe, test, expect } from "bun:test";
import trap from "./trapping-rain-water.js";

describe("Trapping Rain Water", () => {
  test("traps water correctly", () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });

  test("returns 0 for flat surface", () => {
    expect(trap([1, 1, 1, 1])).toBe(0);
  });

  test("returns 0 for empty array", () => {
    expect(trap([])).toBe(0);
  });
});
