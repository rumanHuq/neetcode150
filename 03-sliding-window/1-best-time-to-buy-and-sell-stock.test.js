import { describe, test, expect } from "bun:test";
import maxProfit from "./best-time-to-buy-and-sell-stock.js";

describe("Best Time to Buy and Sell Stock", () => {
  test("calculates max profit", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  test("returns 0 for decreasing prices", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  test("handles two day scenario", () => {
    expect(maxProfit([1, 2])).toBe(1);
  });
});
