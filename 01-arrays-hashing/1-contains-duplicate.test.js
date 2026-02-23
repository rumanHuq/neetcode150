import { describe, test, expect } from "bun:test";
import containsDuplicate from "./contains-duplicate.js";

describe("Contains Duplicate", () => {
  test("returns true for array with duplicates", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  test("returns false for array without duplicates", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  test("returns true for array with all same elements", () => {
    expect(containsDuplicate([1, 1, 1, 1])).toBe(true);
  });

  test("returns false for empty array", () => {
    expect(containsDuplicate([])).toBe(false);
  });

  test("returns true for two duplicate elements", () => {
    expect(containsDuplicate([1, 2])).toBe(false);
  });
});
