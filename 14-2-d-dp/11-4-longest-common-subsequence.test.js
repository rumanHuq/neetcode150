import { describe, test, expect } from "bun:test";
import longestCommonSubsequence from "../14-2-d-dp/longest-common-subsequence";

describe("longest-common-subsequence", () => {
  test("abcde and ace", () => {
    expect(longestCommonSubsequence("abcde", "ace")).toBe(3);
  });

  test("abc and abc", () => {
    expect(longestCommonSubsequence("abc", "abc")).toBe(3);
  });

  test("abc and def", () => {
    expect(longestCommonSubsequence("abc", "def")).toBe(0);
  });

  test("bl and yby", () => {
    expect(longestCommonSubsequence("bl", "yby")).toBe(1);
  });

  test("agh and gha", () => {
    expect(longestCommonSubsequence("agh", "gha")).toBe(2);
  });

  test("empty strings", () => {
    expect(longestCommonSubsequence("", "")).toBe(0);
    expect(longestCommonSubsequence("abc", "")).toBe(0);
  });
});
