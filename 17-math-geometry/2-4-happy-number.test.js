import { describe, test, expect } from "bun:test";
import isHappy from "./happy-number.js";

describe("Happy Number", () => {
  test("19 is a happy number", () => {
    expect(isHappy(19)).toBe(true);
  });

  test("1 is a happy number", () => {
    expect(isHappy(1)).toBe(true);
  });

  test("2 is not a happy number", () => {
    expect(isHappy(2)).toBe(false);
  });

  test("4 is not a happy number", () => {
    expect(isHappy(4)).toBe(false);
  });
});
