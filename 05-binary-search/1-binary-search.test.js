import { describe, test, expect } from "bun:test";
import search from "./binary-search.js";

describe("Binary Search", () => {
  test("finds target in array", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });

  test("returns -1 when not found", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  });
});
