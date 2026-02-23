import { describe, test, expect } from "bun:test";
import checkValidString from "./valid-parenthesis-string.js";

describe("Valid Parenthesis String", () => {
  test("validates string with stars", () => {
    expect(checkValidString("()")).toBe(true);
  });

  test("handles wildcard stars", () => {
    expect(checkValidString("(*)")).toBe(true);
  });

  test("detects invalid string", () => {
    expect(checkValidString(")*(")).toBe(false);
  });
});
