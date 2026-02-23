import { describe, test, expect } from "bun:test";
import isMatch from "../14-2-d-dp/regular-expression-matching";

describe("regular-expression-matching", () => {
  test("aa and a*", () => {
    expect(isMatch("aa", "a*")).toBe(true);
  });

  test("ab and .*", () => {
    expect(isMatch("ab", ".*")).toBe(true);
  });

  test("aab and c*a*b", () => {
    expect(isMatch("aab", "c*a*b")).toBe(true);
  });

  test("mississippi and mis*is*p*.", () => {
    expect(isMatch("mississippi", "mis*is*p*.")).toBe(false);
  });

  test("empty pattern", () => {
    expect(isMatch("", "")).toBe(true);
    expect(isMatch("a", "")).toBe(false);
  });

  test("exact match", () => {
    expect(isMatch("abc", "abc")).toBe(true);
  });

  test("dot only", () => {
    expect(isMatch("a", ".")).toBe(true);
    expect(isMatch("ab", ".")).toBe(false);
  });
});
