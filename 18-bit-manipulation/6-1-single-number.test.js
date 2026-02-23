import { describe, test, expect } from "bun:test";
import singleNumber from "./single-number.js";

describe("Single Number", () => {
  test("finds single number in [2,2,1]", () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
  });

  test("finds single number in [4,1,2,1,2]", () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
  });

  test("handles single element array", () => {
    expect(singleNumber([1])).toBe(1);
  });
});
