import { describe, test, expect } from "bun:test";
import permuteUnique from "./permutations-ii.js";

describe("Permutations II", () => {
  test("generates unique permutations of [1,1,2]", () => {
    const result = permuteUnique([1, 1, 2]);
    expect(result.length).toBe(3);
    expect(result).toContainEqual([1, 1, 2]);
    expect(result).toContainEqual([1, 2, 1]);
    expect(result).toContainEqual([2, 1, 1]);
  });

  test("generates unique permutations of [1,2,3]", () => {
    const result = permuteUnique([1, 2, 3]);
    expect(result.length).toBe(6);
  });
});
