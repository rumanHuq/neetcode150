import { describe, test, expect } from "bun:test";
import reverse from "./reverse-integer.js";

describe("Reverse Integer", () => {
  test("reverses 123", () => {
    expect(reverse(123)).toBe(321);
  });

  test("reverses -123", () => {
    expect(reverse(-123)).toBe(-321);
  });

  test("reverses 120", () => {
    expect(reverse(120)).toBe(21);
  });
});
