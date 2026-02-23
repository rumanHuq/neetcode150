import { describe, test, expect } from "bun:test";
import subsets from "./subsets.js";

describe("Subsets", () => {
  test("generates subsets of [1,2,3]", () => {
    const result = subsets([1, 2, 3]);
    expect(result).toContainEqual([]);
    expect(result).toContainEqual([1]);
    expect(result).toContainEqual([2]);
    expect(result).toContainEqual([3]);
    expect(result).toContainEqual([1, 2]);
    expect(result).toContainEqual([1, 3]);
    expect(result).toContainEqual([2, 3]);
    expect(result).toContainEqual([1, 2, 3]);
    expect(result.length).toBe(8);
  });

  test("generates subsets of [0]", () => {
    const result = subsets([0]);
    expect(result).toContainEqual([]);
    expect(result).toContainEqual([0]);
    expect(result.length).toBe(2);
  });
});
