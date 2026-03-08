import { describe, test, expect } from "bun:test";
import { isPalindrome } from "./1-valid-palindrome-exercise.js";

describe("Valid Palindrome", () => {
  test("returns true for palindrome", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  test("returns false for non-palindrome", () => {
    expect(isPalindrome("race a car")).toBe(false);
  });

  test("returns true for empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  test("handles alphanumeric only", () => {
    expect(isPalindrome("aba")).toBe(true);
  });
});
