import { describe, test, expect } from "bun:test";
import getSum from "./sum-of-two-integers.js";

describe("Sum of Two Integers", () => {
  test("adds 1 and 2", () => {
    expect(getSum(1, 2)).toBe(3);
  });

  test("adds -2 and 3", () => {
    expect(getSum(-2, 3)).toBe(1);
  });

  test("adds -5 and -7", () => {
    expect(getSum(-5, -7)).toBe(-12);
  });
});
