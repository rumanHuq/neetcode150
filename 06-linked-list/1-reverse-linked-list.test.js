import { describe, test, expect } from "bun:test";
import reverseList, { arrayToList, listToArray } from "./reverse-linked-list.js";

describe("Reverse Linked List", () => {
  test("reverses linked list", () => {
    const head = arrayToList([1, 2, 3, 4, 5]);
    const reversed = reverseList(head);
    expect(listToArray(reversed)).toEqual([5, 4, 3, 2, 1]);
  });

  test("handles empty list", () => {
    expect(reverseList(null)).toBe(null);
  });

  test("handles single element", () => {
    const head = arrayToList([1]);
    expect(listToArray(reverseList(head))).toEqual([1]);
  });
});
