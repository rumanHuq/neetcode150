import { describe, test, expect } from "bun:test";
import minPathSum from "../14-2-d-dp/minimum-path-sum";

describe("minimum-path-sum", () => {
  test("3x3 grid", () => {
    expect(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])).toBe(7);
  });

  test("1x1 grid", () => {
    expect(minPathSum([[1]])).toBe(1);
  });

  test("1x4 grid", () => {
    expect(minPathSum([[1, 2, 3, 4]])).toBe(10);
  });

  test("4x1 grid", () => {
    expect(minPathSum([[1], [2], [3], [4]])).toBe(10);
  });

  test("grid with larger values", () => {
    expect(minPathSum([[1, 2, 3], [4, 5, 6]])).toBe(12);
  });
});
