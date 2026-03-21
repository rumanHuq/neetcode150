import { describe, test, expect } from "bun:test";
import checkInclusion from "./4-permutation-in-string-exercise.js";

describe("Permutation in String", () => {
  test("finds permutation", () => {
    expect(checkInclusion("ab", "eidbaooo")).toBe(true);
  });

  test("returns false when no permutation", () => {
    expect(checkInclusion("ab", "eidboaoo")).toBe(false);
  });
});
