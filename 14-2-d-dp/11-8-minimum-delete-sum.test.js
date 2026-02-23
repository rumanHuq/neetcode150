import { describe, test, expect } from "bun:test";
import minimumDeleteSum from "../14-2-d-dp/minimum-delete-sum";

describe("minimum-delete-sum", () => {
  test("sea and eat", () => {
    expect(minimumDeleteSum("sea", "eat")).toBe(231);
  });

  test("delete and leet", () => {
    expect(minimumDeleteSum("delete", "leet")).toBe(403);
  });

  test("identical strings", () => {
    expect(minimumDeleteSum("abc", "abc")).toBe(0);
  });

  test("one string empty", () => {
    expect(minimumDeleteSum("", "abc")).toBe(294);
  });

  test("no common characters", () => {
    expect(minimumDeleteSum("a", "b")).toBe(195);
  });
});
