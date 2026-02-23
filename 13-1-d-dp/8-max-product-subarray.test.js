import { describe, it, expect } from "bun:test";
import maxProduct from "./8-max-product-subarray.js";

describe("maxProduct", () => {
  it("should return 2 for [2,3,-2,4]", () => {
    expect(maxProduct([2, 3, -2, 4])).toBe(6);
  });

  it("should return 0 for [-2,0,-1]", () => {
    expect(maxProduct([-2, 0, -1])).toBe(0);
  });

  it("should handle negative numbers", () => {
    expect(maxProduct([-2, 3, -4])).toBe(24);
  });

  it("should return the single element for single element array", () => {
    expect(maxProduct([-2])).toBe(-2);
  });
});