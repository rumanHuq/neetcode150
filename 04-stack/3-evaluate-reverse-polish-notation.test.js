import { describe, test, expect } from "bun:test";
import evalRPN from "./evaluate-reverse-polish-notation.js";

describe("Evaluate Reverse Polish Notation", () => {
  test("evaluates expression correctly", () => {
    expect(evalRPN(["2", "1", "+", "3", "*"])).toBe(9);
  });

  test("handles division", () => {
    expect(evalRPN(["4", "13", "5", "/", "+"])).toBe(6);
  });

  test("handles single number", () => {
    expect(evalRPN(["5"])).toBe(5);
  });
});
