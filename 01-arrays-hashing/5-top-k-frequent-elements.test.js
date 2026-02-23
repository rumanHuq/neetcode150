import { describe, test, expect } from "bun:test";
import { topKFrequent } from "./5-top-k-frequent-elements";

describe("Top K Frequent Elements", () => {
  test("returns top k frequent elements", () => {
    expect(topKFrequent([1, 2, 2, 3, 3, 3], 2)).toEqual([3, 2]);
  });

  test("handles single element", () => {
    expect(topKFrequent([1], 1)).toEqual([1]);
  });

  test("returns all elements when k equals unique count", () => {
    expect(topKFrequent([1, 2], 2)).toEqual(expect.arrayContaining([1, 2]));
  });
});
