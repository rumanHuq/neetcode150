import { describe, test, expect } from "bun:test";
import canCompleteCircuit from "./gas-station.js";

describe("Gas Station", () => {
  test("finds valid starting station", () => {
    expect(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])).toBe(3);
  });

  test("returns -1 when impossible", () => {
    expect(canCompleteCircuit([2, 3, 4], [3, 4, 3])).toBe(-1);
  });

  test("handles single station", () => {
    expect(canCompleteCircuit([2], [2])).toBe(0);
  });
});
