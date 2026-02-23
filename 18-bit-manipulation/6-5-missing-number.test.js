import { describe, test, expect } from "bun:test";
import missingNumber from "./missing-number.js";

describe("Missing Number", () => {
  test("finds missing number in [3,0,1]", () => {
    expect(missingNumber([3, 0, 1])).toBe(2);
  });

  test("finds missing number in [0,1]", () => {
    expect(missingNumber([0, 1])).toBe(2);
  });

  test("finds missing number in [9,6,4,2,3,5,7,0,1]", () => {
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
  });
});
