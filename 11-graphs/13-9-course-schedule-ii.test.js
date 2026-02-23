import { describe, it, expect } from "bun:test";
import findOrder from "./course-schedule-ii.js";

describe("course-schedule-ii", () => {
  it("should return valid course order", () => {
    const numCourses = 2;
    const prerequisites = [[1, 0]];
    const result = findOrder(numCourses, prerequisites);
    expect(result.length).toBe(2);
    expect(result.indexOf(0)).toBeLessThan(result.indexOf(1));
  });

  it("should return empty for cyclic dependencies", () => {
    const numCourses = 2;
    const prerequisites = [[1, 0], [0, 1]];
    expect(findOrder(numCourses, prerequisites)).toEqual([]);
  });

  it("should return all courses for no prerequisites", () => {
    const numCourses = 3;
    const prerequisites = [];
    const result = findOrder(numCourses, prerequisites);
    expect(result.length).toBe(3);
  });

  it("should handle longer prerequisite chain", () => {
    const numCourses = 4;
    const prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]];
    const result = findOrder(numCourses, prerequisites);
    expect(result.length).toBe(4);
    expect(result.indexOf(0)).toBeLessThan(result.indexOf(1));
    expect(result.indexOf(0)).toBeLessThan(result.indexOf(2));
  });
});
