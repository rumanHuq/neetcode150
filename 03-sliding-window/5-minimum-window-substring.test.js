import { describe, test, expect } from "bun:test";
import minWindow from "./minimum-window-substring.js";

describe("Minimum Window Substring", () => {
  test("finds minimum window", () => {
    expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
  });

  test("handles single character", () => {
    expect(minWindow("a", "a")).toBe("a");
  });

  test("returns empty when not found", () => {
    expect(minWindow("a", "aa")).toBe("");
  });
});
