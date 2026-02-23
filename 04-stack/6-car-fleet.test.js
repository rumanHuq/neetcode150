import { describe, test, expect } from "bun:test";
import carFleet from "./car-fleet.js";

describe("Car Fleet", () => {
  test("calculates number of fleets", () => {
    expect(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])).toBe(3);
  });

  test("handles single car", () => {
    expect(carFleet(10, [4], [2])).toBe(1);
  });
});
