import { describe, test, expect } from "bun:test";
import leastInterval from "./task-scheduler.js.js";

describe("621. Task Scheduler", () => {
  test("should calculate minimum intervals", () => {
    expect(leastInterval(["A", "A", "A", "B", "B", "B"], 2)).toBe(8);
    expect(leastInterval(["A", "A", "A", "B", "B", "B"], 0)).toBe(6);
  });

  test("should handle single task type", () => {
    expect(leastInterval(["A", "A", "A", "A"], 3)).toBe(13);
  });

  test("should handle all different tasks", () => {
    expect(leastInterval(["A", "B", "C", "D", "E", "F", "G"], 2)).toBe(7);
  });

  test("should handle multiple max frequency tasks", () => {
    expect(leastInterval(["A", "A", "A", "B", "B", "B", "C", "C"], 2)).toBe(8);
  });

  test("should handle n=1", () => {
    expect(leastInterval(["A", "B"], 1)).toBe(2);
  });

  test("should handle idle time", () => {
    expect(leastInterval(["A", "B", "C", "D", "E", "A", "B", "C"], 3)).toBe(8);
  });
});
