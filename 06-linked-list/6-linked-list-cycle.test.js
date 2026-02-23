import { describe, test, expect } from "bun:test";
import hasCycle, { ListNode, arrayToList } from "./linked-list-cycle.js";

describe("linked-list-cycle", () => {
  test("detects cycle", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = head.next;
    
    expect(hasCycle(head)).toBe(true);
  });

  test("returns false for no cycle", () => {
    const head = arrayToList([1, 2, 3, 4]);
    expect(hasCycle(head)).toBe(false);
  });

  test("handles empty list", () => {
    expect(hasCycle(null)).toBe(false);
  });

  test("handles single node with cycle to self", () => {
    const head = new ListNode(1);
    head.next = head;
    
    expect(hasCycle(head)).toBe(true);
  });

  test("handles single node without cycle", () => {
    const head = new ListNode(1);
    expect(hasCycle(head)).toBe(false);
  });

  test("cycle at beginning", () => {
    const head = new ListNode(1);
    const second = new ListNode(2);
    head.next = second;
    second.next = head;
    
    expect(hasCycle(head)).toBe(true);
  });
});
