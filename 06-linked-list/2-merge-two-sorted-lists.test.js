import { describe, test, expect } from "bun:test";
import mergeTwoLists from "./merge-two-sorted-lists.js";
import { arrayToList, listToArray } from "./reverse-linked-list.js";

describe("Merge Two Sorted Lists", () => {
  test("merges two sorted lists", () => {
    const l1 = arrayToList([1, 2, 4]);
    const l2 = arrayToList([1, 3, 4]);
    const merged = mergeTwoLists(l1, l2);
    expect(listToArray(merged)).toEqual([1, 1, 2, 3, 4, 4]);
  });

  test("handles empty lists", () => {
    expect(mergeTwoLists(null, null)).toBe(null);
  });
});
