import { describe, test, expect } from "bun:test";
import maxSlidingWindow from "./6-sliding-window-maximum-exercise.js";

describe("Sliding Window Maximum", () => {
  test("finds max values in each window", () => {
    expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3, 3, 5, 5, 6, 7]);
  });

  test("handles k equals 1", () => {
    expect(maxSlidingWindow([1], 1)).toEqual([1]);
  });

  test("handles k equals array length", () => {
    expect(maxSlidingWindow([1, 3, 1], 3)).toEqual([3]);
  });
});
