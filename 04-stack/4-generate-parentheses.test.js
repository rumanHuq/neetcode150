import { describe, test, expect } from "bun:test";
import generateParenthesis from "./generate-parentheses.js";

describe("Generate Parentheses", () => {
  test("generates all valid combinations", () => {
    expect(generateParenthesis(3)).toEqual(["((()))", "(()())", "(())()", "()(())", "()()()"]);
  });

  test("generates one combination for n=1", () => {
    expect(generateParenthesis(1)).toEqual(["()"]);
  });
});
