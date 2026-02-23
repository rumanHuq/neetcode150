import { describe, test, expect } from "bun:test";
import dailyTemperatures from "./daily-temperatures.js";

describe("Daily Temperatures", () => {
  test("calculates days until warmer temperature", () => {
    expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
  });

  test("handles decreasing temperatures", () => {
    expect(dailyTemperatures([30, 40, 50, 60])).toEqual([1, 1, 1, 0]);
  });
});
