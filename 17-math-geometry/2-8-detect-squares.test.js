import { describe, test, expect } from "bun:test";
import DetectSquares from "./detect-squares.js";

describe("Detect Squares", () => {
  test("counts squares correctly", () => {
    const ds = new DetectSquares();
    ds.add([3, 10]);
    ds.add([11, 10]);
    ds.add([3, 0]);
    ds.add([11, 0]);
    expect(ds.count([3, 0])).toBe(2);
  });

  test("counts multiple squares", () => {
    const ds = new DetectSquares();
    ds.add([1, 2]);
    ds.add([2, 1]);
    ds.add([2, 3]);
    ds.add([3, 2]);
    expect(ds.count([2, 1])).toBe(2);
  });

  test("returns 0 when no squares", () => {
    const ds = new DetectSquares();
    ds.add([1, 2]);
    ds.add([2, 1]);
    expect(ds.count([3, 3])).toBe(0);
  });
});
