import { describe, test, expect } from "bun:test";
import search from "./search-rotated-sorted-array.js";

describe("Search in Rotated Sorted Array", () => {
  test("finds target in rotated array", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  });

  test("returns -1 when not found", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  });
});
