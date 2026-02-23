import { describe, test, expect } from "bun:test";
import subsetsWithDup from "./subsets-ii.js";

describe("Subsets II", () => {
  test("generates subsets with duplicates", () => {
    const result = subsetsWithDup([1, 2, 2]);
    expect(result.length).toBe(6);
    expect(result).toContainEqual([]);
    expect(result).toContainEqual([1]);
    expect(result).toContainEqual([2]);
    expect(result).toContainEqual([1, 2]);
    expect(result).toContainEqual([2, 2]);
    expect(result).toContainEqual([1, 2, 2]);
  });

  test("handles single duplicate", () => {
    const result = subsetsWithDup([1, 1, 1]);
    expect(result.length).toBe(4);
  });
});
