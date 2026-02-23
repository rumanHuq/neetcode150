import { describe, test, expect } from "bun:test";
import copyRandomList, { Node, arrayToListWithRandom, listToArrayWithRandom } from "./copy-list-random-pointer.js";

describe("copy-list-random-pointer", () => {
  test("creates deep copy with random pointers", () => {
    const head = arrayToListWithRandom([1, 2, 3], [2, 0, null]);
    const copied = copyRandomList(head);
    
    expect(copied).not.toBe(head);
    expect(copied.val).toBe(1);
    expect(copied.next.val).toBe(2);
    expect(copied.next.next.val).toBe(3);
    
    const copiedArr = listToArrayWithRandom(copied);
    expect(copiedArr[0].randomIdx).toBe(2);
    expect(copiedArr[1].randomIdx).toBe(0);
    expect(copiedArr[2].randomIdx).toBe(null);
  });

  test("handles single node with null random", () => {
    const head = arrayToListWithRandom([1], [null]);
    const copied = copyRandomList(head);
    
    expect(copied).not.toBe(head);
    expect(copied.val).toBe(1);
    expect(copied.random).toBe(null);
  });

  test("handles empty list", () => {
    const copied = copyRandomList(null);
    expect(copied).toBe(null);
  });

  test("handles list with all random pointing to self", () => {
    const head = arrayToListWithRandom([1, 2], [0, 1]);
    const copied = copyRandomList(head);
    
    const copiedArr = listToArrayWithRandom(copied);
    expect(copiedArr[0].randomIdx).toBe(0);
    expect(copiedArr[1].randomIdx).toBe(1);
  });
});
