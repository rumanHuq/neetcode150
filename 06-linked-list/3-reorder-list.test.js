import { describe, test, expect } from "bun:test";
import reorderList, { ListNode, arrayToList, listToArray } from "./reorder-list.js";

describe("reorder-list", () => {
  test("reorders [1,2,3,4,5] to [1,5,2,4,3]", () => {
    const head = arrayToList([1, 2, 3, 4, 5]);
    reorderList(head);
    expect(listToArray(head)).toEqual([1, 5, 2, 4, 3]);
  });

  test("reorders [1,2,3,4] to [1,4,2,3]", () => {
    const head = arrayToList([1, 2, 3, 4]);
    reorderList(head);
    expect(listToArray(head)).toEqual([1, 4, 2, 3]);
  });

  test("handles single node", () => {
    const head = arrayToList([1]);
    reorderList(head);
    expect(listToArray(head)).toEqual([1]);
  });

  test("handles empty list", () => {
    const head = arrayToList([]);
    reorderList(head);
    expect(listToArray(head)).toEqual([]);
  });

  test("handles two nodes", () => {
    const head = arrayToList([1, 2]);
    reorderList(head);
    expect(listToArray(head)).toEqual([1, 2]);
  });
});
