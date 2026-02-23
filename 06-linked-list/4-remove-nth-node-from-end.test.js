import { describe, test, expect } from "bun:test";
import removeNthFromEnd, { ListNode, arrayToList, listToArray } from "./remove-nth-node-from-end.js";

describe("remove-nth-node-from-end", () => {
  test("removes 2nd node from end [1,2,3,4,5]", () => {
    const head = arrayToList([1, 2, 3, 4, 5]);
    const result = removeNthFromEnd(head, 2);
    expect(listToArray(result)).toEqual([1, 2, 3, 5]);
  });

  test("removes 1st node from end", () => {
    const head = arrayToList([1, 2, 3, 4, 5]);
    const result = removeNthFromEnd(head, 1);
    expect(listToArray(result)).toEqual([1, 2, 3, 4]);
  });

  test("removes last node", () => {
    const head = arrayToList([1, 2, 3, 4, 5]);
    const result = removeNthFromEnd(head, 5);
    expect(listToArray(result)).toEqual([2, 3, 4, 5]);
  });

  test("handles single node removal", () => {
    const head = arrayToList([1]);
    const result = removeNthFromEnd(head, 1);
    expect(listToArray(result)).toEqual([]);
  });

  test("handles two nodes", () => {
    const head = arrayToList([1, 2]);
    const result = removeNthFromEnd(head, 1);
    expect(listToArray(result)).toEqual([1]);
  });
});
