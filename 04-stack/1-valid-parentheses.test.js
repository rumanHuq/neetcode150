import { describe, test, expect } from "bun:test";
import isValid from "./valid-parentheses.js";

describe("Valid Parentheses", () => {
  test("returns true for valid parentheses", () => {
    expect(isValid("()")).toBe(true);
  });

  test("returns true for nested valid parentheses", () => {
    expect(isValid("()[]{}")).toBe(true);
  });

  test("returns false for invalid parentheses", () => {
    expect(isValid("(]")).toBe(false);
  });

  test("returns true for empty string", () => {
    expect(isValid("")).toBe(true);
  });
});
