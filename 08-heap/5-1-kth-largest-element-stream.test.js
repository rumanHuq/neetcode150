import { describe, test, expect } from "bun:test";
import KthLargest from "./kth-largest-element-stream.js.js";

describe("703. Kth Largest Element in a Stream", () => {
  test("should return kth largest element", () => {
    const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
    expect(kthLargest.add(3)).toBe(4);
    expect(kthLargest.add(5)).toBe(5);
    expect(kthLargest.add(10)).toBe(5);
    expect(kthLargest.add(9)).toBe(8);
    expect(kthLargest.add(4)).toBe(8);
  });

  test("should handle empty initial array", () => {
    const kthLargest = new KthLargest(1, []);
    expect(kthLargest.add(5)).toBe(5);
    expect(kthLargest.add(3)).toBe(5);
  });

  test("should handle single element", () => {
    const kthLargest = new KthLargest(1, [5]);
    expect(kthLargest.add(1)).toBe(5);
  });
});
