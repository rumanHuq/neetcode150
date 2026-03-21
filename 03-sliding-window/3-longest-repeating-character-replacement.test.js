import { describe, test, expect } from "bun:test";
import {characterReplacement} from "./3-longest-repeating-character-replacement-exercise.js";

describe("Longest Repeating Character Replacement", () => {
  test("finds longest repeating character", () => {
    expect(characterReplacement("ABAB", 2)).toBe(4);
  });

  test("handles single replacement", () => {
    expect(characterReplacement("AABABBA", 1)).toBe(4);
  });
});
