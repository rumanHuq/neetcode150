import { describe, test, expect } from "bun:test";
import myPow from "./pow.js";

describe("Pow(x, n)", () => {
  test("calculates 2^10", () => {
    expect(myPow(2, 10)).toBe(1024);
  });

  test("calculates 2.1^3", () => {
    expect(myPow(2.1, 3)).toBeCloseTo(9.261);
  });

  test("calculates 2^-2", () => {
    expect(myPow(2, -2)).toBe(0.25);
  });

  test("handles n=0", () => {
    expect(myPow(2, 0)).toBe(1);
  });

  test("handles n=1", () => {
    expect(myPow(5, 1)).toBe(5);
  });
});
