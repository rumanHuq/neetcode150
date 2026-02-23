import { describe, it, expect } from "bun:test";
import canFinish from "./course-schedule.js";

describe("course-schedule", () => {
  it("should return true for valid course schedule", () => {
    const numCourses = 2;
    const prerequisites = [[1, 0]];
    expect(canFinish(numCourses, prerequisites)).toBe(true);
  });

  it("should return false for cyclic dependencies", () => {
    const numCourses = 2;
    const prerequisites = [[1, 0], [0, 1]];
    expect(canFinish(numCourses, prerequisites)).toBe(false);
  });

  it("should return true for no prerequisites", () => {
    const numCourses = 3;
    const prerequisites = [];
    expect(canFinish(numCourses, prerequisites)).toBe(true);
  });

  it("should handle multiple courses with prerequisites", () => {
    const numCourses = 4;
    const prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]];
    expect(canFinish(numCourses, prerequisites)).toBe(true);
  });

  it("should return false for cycle in longer chain", () => {
    const numCourses = 3;
    const prerequisites = [[1, 0], [2, 1], [0, 2]];
    expect(canFinish(numCourses, prerequisites)).toBe(false);
  });
});
