import { describe, test, expect } from "bun:test";
import maxArea from "./container-with-most-water.js";

describe("Container With Most Water", () => {
  test("finds maximum area", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  test("handles two elements", () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  test("handles decreasing heights", () => {
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
  });
});
