import { describe, test, expect } from "bun:test";
import lengthOfLongestSubstring from "./longest-substring-without-repeating.js";

describe("Longest Substring Without Repeating Characters", () => {
  test("finds longest substring", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });

  test("handles empty string", () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
  });

  test("handles all same characters", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });
});
