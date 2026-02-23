import { describe, test, expect } from "bun:test";
import findDuplicate from "./find-duplicate-number.js";

describe("find-duplicate-number", () => {
  test("finds duplicate [1,3,4,2,2]", () => {
    expect(findDuplicate([1, 3, 4, 2, 2])).toBe(2);
  });

  test("finds duplicate [3,1,3,4,2]", () => {
    expect(findDuplicate([3, 1, 3, 4, 2])).toBe(3);
  });

  test("finds duplicate [1,1,2]", () => {
    expect(findDuplicate([1, 1, 2])).toBe(1);
  });

  test("finds duplicate [2,2,2,2]", () => {
    expect(findDuplicate([2, 2, 2, 2])).toBe(2);
  });

  test("finds duplicate in larger array", () => {
    const arr = [1, 4, 3, 2, 2, 5, 6, 7, 8, 9];
    expect(findDuplicate(arr)).toBe(2);
  });
});
