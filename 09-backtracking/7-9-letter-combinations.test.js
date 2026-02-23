import { describe, test, expect } from "bun:test";
import letterCombinations from "./letter-combinations.js";

describe("Letter Combinations", () => {
  test("generates combinations for 23", () => {
    const result = letterCombinations("23");
    expect(result).toContain("ad");
    expect(result).toContain("ae");
    expect(result).toContain("af");
    expect(result).toContain("bd");
    expect(result).toContain("be");
    expect(result).toContain("bf");
    expect(result).toContain("cd");
    expect(result).toContain("ce");
    expect(result).toContain("cf");
    expect(result.length).toBe(9);
  });

  test("returns empty for empty string", () => {
    expect(letterCombinations("")).toEqual([]);
  });

  test("generates combinations for 7", () => {
    const result = letterCombinations("7");
    expect(result.length).toBe(4);
  });
});
