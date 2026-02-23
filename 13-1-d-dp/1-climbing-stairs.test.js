import { describe, it, expect } from "bun:test";
import climbStairs from "./1-climbing-stairs.js";

describe("climbStairs", () => {
  it("should return 2 for n=2", () => {
    expect(climbStairs(2)).toBe(2);
  });

  it("should return 3 for n=3", () => {
    expect(climbStairs(3)).toBe(3);
  });

  it("should return 5 for n=4", () => {
    expect(climbStairs(4)).toBe(5);
  });

  it("should return 8 for n=5", () => {
    expect(climbStairs(5)).toBe(8);
  });
});