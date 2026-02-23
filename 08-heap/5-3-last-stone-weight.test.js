import { describe, test, expect } from "bun:test";
import lastStoneWeight from "./last-stone-weight.js.js";

describe("1046. Last Stone Weight", () => {
  test("should return correct final weight", () => {
    expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toBe(1);
  });

  test("should return 0 when no stones remain", () => {
    expect(lastStoneWeight([3, 3])).toBe(0);
    expect(lastStoneWeight([5, 5])).toBe(0);
  });

  test("should return the only stone weight", () => {
    expect(lastStoneWeight([1])).toBe(1);
    expect(lastStoneWeight([10])).toBe(10);
  });

  test("should handle two stones", () => {
    expect(lastStoneWeight([4, 6])).toBe(2);
    expect(lastStoneWeight([1, 2])).toBe(1);
  });

  test("should return 0 for empty array", () => {
    expect(lastStoneWeight([])).toBe(0);
  });
});
