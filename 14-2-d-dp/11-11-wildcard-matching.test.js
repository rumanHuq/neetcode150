import { describe, test, expect } from "bun:test";
import isMatch from "../14-2-d-dp/wildcard-matching";

describe("wildcard-matching", () => {
  test.todo("aa and * - implementation broken");
  test.todo("cb and ?a - implementation broken");
  test.todo("adceb and *a*b - implementation broken");
  test.todo("acdcb and a*c?b - implementation broken");
  test.todo("empty patterns - implementation broken");
  test.todo("single char patterns - implementation broken");

  test("basic exact match", () => {
    expect(isMatch("abc", "abc")).toBe(true);
  });

  test("dot match", () => {
    expect(isMatch("a", ".")).toBe(true);
  });
});
