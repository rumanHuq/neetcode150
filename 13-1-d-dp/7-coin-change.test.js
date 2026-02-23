import { describe, it, expect } from "bun:test";
import coinChange from "./7-coin-change.js";

describe("coinChange", () => {
  it("should return 0 for amount 0", () => {
    expect(coinChange([1, 2, 5], 0)).toBe(0);
  });

  it("should return 3 for amount 11 with coins [1, 2, 5]", () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3);
  });

  it("should return -1 for impossible amount", () => {
    expect(coinChange([2], 3)).toBe(-1);
  });

  it("should return 1 for amount equal to coin", () => {
    expect(coinChange([1], 2)).toBe(2);
  });
});