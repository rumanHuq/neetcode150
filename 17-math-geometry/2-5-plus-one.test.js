import { describe, test, expect } from "bun:test";
import plusOne from "./plus-one.js";

describe("Plus One", () => {
  test("adds one to [1,2,3]", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });

  test("handles [9]", () => {
    expect(plusOne([9])).toEqual([1, 0]);
  });

  test("handles [9,9,9]", () => {
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });

  test("handles [1,2,9]", () => {
    expect(plusOne([1, 2, 9])).toEqual([1, 3, 0]);
  });
});
