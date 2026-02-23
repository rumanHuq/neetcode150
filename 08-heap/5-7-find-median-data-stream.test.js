import { describe, test, expect } from "bun:test";
import MedianFinder from "./find-median-data-stream.js.js";

describe("295. Find Median from Data Stream", () => {
  test("should find median correctly", () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(1);
    medianFinder.addNum(2);
    expect(medianFinder.findMedian()).toBe(1.5);
    medianFinder.addNum(3);
    expect(medianFinder.findMedian()).toBe(2);
  });

  test("should handle odd number of elements", () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(1);
    medianFinder.addNum(2);
    medianFinder.addNum(3);
    expect(medianFinder.findMedian()).toBe(2);
  });

  test("should handle even number of elements", () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(1);
    medianFinder.addNum(2);
    medianFinder.addNum(3);
    medianFinder.addNum(4);
    expect(medianFinder.findMedian()).toBe(2);
  });

  test("should handle large numbers", () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(100);
    medianFinder.addNum(200);
    medianFinder.addNum(300);
    expect(medianFinder.findMedian()).toBe(200);
  });

  test("should handle duplicate numbers", () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(1);
    medianFinder.addNum(1);
    medianFinder.addNum(1);
    medianFinder.addNum(1);
    expect(medianFinder.findMedian()).toBe(1);
  });

  test("should handle single element", () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(5);
    expect(medianFinder.findMedian()).toBe(5);
  });
});
