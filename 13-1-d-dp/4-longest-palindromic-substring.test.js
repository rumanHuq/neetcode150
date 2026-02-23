import { describe, it, expect } from "bun:test";
import longestPalindrome from "./4-longest-palindromic-substring.js";

describe("longestPalindrome", () => {
  it("should return the string itself for single character", () => {
    expect(longestPalindrome("a")).toBe("a");
  });

  it("should return longest palindrome", () => {
    expect(longestPalindrome("babad")).toMatch(/bab|aba/);
  });

  it("should return correct palindrome for 'cbbd'", () => {
    expect(longestPalindrome("cbbd")).toBe("bb");
  });

  it("should handle 'racecar'", () => {
    expect(longestPalindrome("racecar")).toBe("racecar");
  });
});