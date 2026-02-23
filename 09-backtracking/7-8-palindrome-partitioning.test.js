import { describe, test, expect } from "bun:test";
import partition from "./palindrome-partitioning.js";

describe("Palindrome Partitioning", () => {
  test("partitions aab", () => {
    const result = partition("aab");
    expect(result).toContainEqual(["a", "a", "b"]);
    expect(result).toContainEqual(["aa", "b"]);
  });

  test("partitions a", () => {
    const result = partition("a");
    expect(result).toContainEqual(["a"]);
  });
});
