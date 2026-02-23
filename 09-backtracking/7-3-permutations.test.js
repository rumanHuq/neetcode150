import { describe, test, expect } from "bun:test";
import permute from "./permutations.js";

describe("Permutations", () => {
  test("generates permutations of [1,2,3]", () => {
    const result = permute([1, 2, 3]);
    expect(result.length).toBe(6);
    expect(result).toContainEqual([1, 2, 3]);
    expect(result).toContainEqual([1, 3, 2]);
    expect(result).toContainEqual([2, 1, 3]);
    expect(result).toContainEqual([2, 3, 1]);
    expect(result).toContainEqual([3, 1, 2]);
    expect(result).toContainEqual([3, 2, 1]);
  });

  test("generates permutations of [0,1]", () => {
    const result = permute([0, 1]);
    expect(result.length).toBe(2);
    expect(result).toContainEqual([0, 1]);
    expect(result).toContainEqual([1, 0]);
  });
});
