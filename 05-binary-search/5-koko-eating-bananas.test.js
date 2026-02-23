import { describe, test, expect } from "bun:test";
import minEatingSpeed from "./koko-eating-bananas.js";

describe("Koko Eating Bananas", () => {
  test("finds minimum speed", () => {
    expect(minEatingSpeed([3, 6, 7, 11], 8)).toBe(4);
  });

  test("handles large h", () => {
    expect(minEatingSpeed([30, 11, 23, 4, 20], 5)).toBe(30);
  });
});
