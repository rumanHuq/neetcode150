import { describe, test, expect } from "bun:test";
import productExceptSelf from "./product-of-array-except-self.js";

describe("Product of Array Except Self", () => {
  test("calculates products correctly", () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  test("handles two elements", () => {
    expect(productExceptSelf([2, 3])).toEqual([3, 2]);
  });

  test("handles array with zeros", () => {
    expect(productExceptSelf([1, 0, 3, 4])).toEqual([0, 12, 0, 0]);
  });
});
