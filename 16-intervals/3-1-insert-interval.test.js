import { describe, test, expect } from "bun:test";
import insertInterval from "./insert-interval.js";

describe("Insert Interval", () => {
  test("inserts new interval", () => {
    expect(insertInterval([[1, 3], [6, 9]], [2, 5])).toEqual([[1, 5], [6, 9]]);
  });

  test("handles intervals before new interval", () => {
    expect(insertInterval([[1, 2], [3, 4]], [5, 6])).toEqual([[1, 2], [3, 4], [5, 6]]);
  });

  test("handles empty intervals", () => {
    expect(insertInterval([], [5, 7])).toEqual([[5, 7]]);
  });
});
