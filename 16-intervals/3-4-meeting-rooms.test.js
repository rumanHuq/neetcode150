import { describe, test, expect } from "bun:test";
import canAttendMeetings from "./meeting-rooms.js";

describe("Meeting Rooms", () => {
  test("can attend all meetings", () => {
    expect(canAttendMeetings([[0, 30], [5, 10], [15, 20]])).toBe(false);
  });

  test("can attend when no overlap", () => {
    expect(canAttendMeetings([[7, 10], [2, 4]])).toBe(true);
  });

  test("handles single meeting", () => {
    expect(canAttendMeetings([[0, 1]])).toBe(true);
  });
});
