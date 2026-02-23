import { describe, it, expect } from "bun:test";
import countSubstrings from "./5-palindromic-substrings.js";

describe("countSubstrings", () => {
  it("should return 1 for single character", () => {
    expect(countSubstrings("a")).toBe(1);
  });

  it("should return 3 for 'abc'", () => {
    expect(countSubstrings("abc")).toBe(3);
  });

  it("should return 6 for 'aaa'", () => {
    expect(countSubstrings("aaa")).toBe(6);
  });

  it("should return 3 for 'aba'", () => {
    expect(countSubstrings("aba")).toBe(4);
  });
});