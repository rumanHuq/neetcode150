import { describe, test, expect } from "bun:test";
import candy from "./candy.js";

describe("Candy", () => {
  test("distributes candies correctly", () => {
    expect(candy([1, 0, 2])).toBe(5);
  });

  test("handles equal ratings", () => {
    expect(candy([1, 1, 1])).toBe(3);
  });

  test("handles decreasing ratings", () => {
    expect(candy([5, 4, 3, 2, 1])).toBe(15);
  });
});
