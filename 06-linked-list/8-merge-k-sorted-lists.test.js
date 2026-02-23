import { describe, test, expect } from "bun:test";
import mergeKLists, { ListNode, arrayToList, listToArray } from "./merge-k-sorted-lists.js";

describe("merge-k-sorted-lists", () => {
  test("merges multiple sorted lists", () => {
    const lists = [
      arrayToList([1, 4, 5]),
      arrayToList([1, 3, 4]),
      arrayToList([2, 6])
    ];
    const result = mergeKLists(lists);
    expect(listToArray(result)).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
  });

  test("handles empty array", () => {
    const result = mergeKLists([]);
    expect(result).toBe(null);
  });

  test("handles array with null lists", () => {
    const result = mergeKLists([null, null]);
    expect(result).toBe(null);
  });

  test("merges single list", () => {
    const lists = [arrayToList([1, 2, 3])];
    const result = mergeKLists(lists);
    expect(listToArray(result)).toEqual([1, 2, 3]);
  });

  test("merges two lists", () => {
    const lists = [
      arrayToList([1, 2, 3]),
      arrayToList([4, 5, 6])
    ];
    const result = mergeKLists(lists);
    expect(listToArray(result)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("handles interleaved values", () => {
    const lists = [
      arrayToList([1, 3, 5]),
      arrayToList([2, 4, 6])
    ];
    const result = mergeKLists(lists);
    expect(listToArray(result)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
