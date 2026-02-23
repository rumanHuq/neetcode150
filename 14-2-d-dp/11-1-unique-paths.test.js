import { describe, test, expect } from "bun:test";
import uniquePaths from "../14-2-d-dp/unique-paths";

describe("unique-paths", () => {
  test("3x7 grid", () => {
    expect(uniquePaths(3, 7)).toBe(28);
  });

  test("3x2 grid", () => {
    expect(uniquePaths(3, 2)).toBe(3);
  });

  test("1x1 grid", () => {
    expect(uniquePaths(1, 1)).toBe(1);
  });

  test("1x5 grid", () => {
    expect(uniquePaths(1, 5)).toBe(1);
  });

  test("5x1 grid", () => {
    expect(uniquePaths(5, 1)).toBe(1);
  });
});
