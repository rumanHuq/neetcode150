import { describe, test, expect } from "bun:test";
import multiply from "./multiply-strings.js";

describe("Multiply Strings", () => {
  test("multiplies 2 and 3", () => {
    expect(multiply("2", "3")).toBe("6");
  });

  test("multiplies 123 and 456", () => {
    expect(multiply("123", "456")).toBe("56088");
  });

  test("multiplies with zeros", () => {
    expect(multiply("123", "0")).toBe("0");
  });

  test("multiplies 999 and 999", () => {
    expect(multiply("999", "999")).toBe("998001");
  });
});
