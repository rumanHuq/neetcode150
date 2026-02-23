import { describe, test, expect } from "bun:test";
import characterReplacement from "./longest-repeating-character-replacement.js";

describe("Longest Repeating Character Replacement", () => {
  test("finds longest repeating character", () => {
    expect(characterReplacement("ABAB", 2)).toBe(4);
  });

  test("handles single replacement", () => {
    expect(characterReplacement("AABABBA", 1)).toBe(4);
  });
});
