import { describe, test, expect } from "bun:test";
import MinStack from "./min-stack.js";

describe("Min Stack", () => {
  test("push and getMin work correctly", () => {
    const stack = new MinStack();
    stack.push(-2);
    stack.push(0);
    stack.push(-3);
    expect(stack.getMin()).toBe(-3);
    stack.pop();
    expect(stack.top()).toBe(0);
    expect(stack.getMin()).toBe(-2);
  });

  test("handles single element", () => {
    const stack = new MinStack();
    stack.push(0);
    expect(stack.getMin()).toBe(0);
    expect(stack.top()).toBe(0);
  });
});
