import { describe, test, expect } from "bun:test";
import isInterleave from "../14-2-d-dp/interleaving-string";

describe("interleaving-string", () => {
  test("s1=abc, s2=def, s3=abcdef", () => {
    expect(isInterleave("abc", "def", "abcdef")).toBe(true);
  });

  test("s1=aabcc, s2=dbbca, s3=aadbbcbcac", () => {
    expect(isInterleave("aabcc", "dbbca", "aadbbcbcac")).toBe(true);
  });

  test("s1=aabcc, s2=dbbca, s3=aadbbbaccc", () => {
    expect(isInterleave("aabcc", "dbbca", "aadbbbaccc")).toBe(false);
  });

  test("empty strings", () => {
    expect(isInterleave("", "", "")).toBe(true);
    expect(isInterleave("", "abc", "abc")).toBe(true);
    expect(isInterleave("abc", "", "abc")).toBe(true);
  });

  test("length mismatch", () => {
    expect(isInterleave("a", "b", "ab")).toBe(true);
    expect(isInterleave("a", "b", "a")).toBe(false);
  });
});
