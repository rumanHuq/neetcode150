import { describe, test, expect } from "bun:test";
import minDistance from "../14-2-d-dp/edit-distance";

describe("edit-distance", () => {
  test("horse to ros", () => {
    expect(minDistance("horse", "ros")).toBe(3);
  });

  test("intention to execution", () => {
    expect(minDistance("intention", "execution")).toBe(5);
  });

  test("empty strings", () => {
    expect(minDistance("", "")).toBe(0);
    expect(minDistance("", "abc")).toBe(3);
    expect(minDistance("abc", "")).toBe(3);
  });

  test("identical strings", () => {
    expect(minDistance("abc", "abc")).toBe(0);
  });

  test("one char difference", () => {
    expect(minDistance("abc", "abd")).toBe(1);
  });
});
