import { describe, test, expect } from "bun:test";
import reverseKGroup, { ListNode, arrayToList, listToArray } from "./reverse-nodes-in-k-group.js";

describe("reverse-nodes-in-k-group", () => {
  test("reverses in groups of k=2", () => {
    const head = arrayToList([1, 2, 3, 4, 5]);
    const result = reverseKGroup(head, 2);
    expect(listToArray(result)).toEqual([2, 1, 4, 3, 5]);
  });

  test("reverses in groups of k=3", () => {
    const head = arrayToList([1, 2, 3, 4, 5]);
    const result = reverseKGroup(head, 3);
    expect(listToArray(result)).toEqual([3, 2, 1, 4, 5]);
  });

  test("handles k=1 (no change)", () => {
    const head = arrayToList([1, 2, 3, 4, 5]);
    const result = reverseKGroup(head, 1);
    expect(listToArray(result)).toEqual([1, 2, 3, 4, 5]);
  });

  test("handles k equals list length", () => {
    const head = arrayToList([1, 2, 3, 4, 5]);
    const result = reverseKGroup(head, 5);
    expect(listToArray(result)).toEqual([5, 4, 3, 2, 1]);
  });

  test("handles incomplete last group", () => {
    const head = arrayToList([1, 2, 3, 4, 5, 6, 7, 8]);
    const result = reverseKGroup(head, 3);
    expect(listToArray(result)).toEqual([3, 2, 1, 6, 5, 4, 7, 8]);
  });

  test("handles single node", () => {
    const head = arrayToList([1]);
    const result = reverseKGroup(head, 2);
    expect(listToArray(result)).toEqual([1]);
  });

  test("handles empty list", () => {
    const head = arrayToList([]);
    const result = reverseKGroup(head, 2);
    expect(listToArray(result)).toEqual([]);
  });
});
