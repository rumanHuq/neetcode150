import { describe, test, expect } from "bun:test";
import isAnagram from "./valid-anagram.js";

describe("Valid Anagram", () => {
  test("returns true for anagrams", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });

  test("returns false for non-anagrams", () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });

  test("returns true for empty strings", () => {
    expect(isAnagram("", "")).toBe(true);
  });

  test("returns false for different lengths", () => {
    expect(isAnagram("a", "ab")).toBe(false);
  });
});
