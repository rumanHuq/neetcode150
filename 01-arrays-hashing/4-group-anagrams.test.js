import { describe, test, expect } from "bun:test";
import { groupAnagrams } from "./4-group-anagrams-exercise.js";

describe("Group Anagrams", () => {
  test("groups anagrams together", () => {
    const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
    expect(result.length).toBe(3);
  });

  test("handles empty input", () => {
    expect(groupAnagrams([""])).toEqual([[""]]);
  });

  test("handles single character strings", () => {
    const result = groupAnagrams(["a", "a"]);
    expect(result.length).toBe(1);
  });
});
