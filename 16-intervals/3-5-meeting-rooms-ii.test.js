import { describe, test, expect } from "bun:test";
import minMeetingRooms from "./meeting-rooms-ii.js";

describe("Meeting Rooms II", () => {
  test("finds minimum meeting rooms", () => {
    expect(minMeetingRooms([[0, 30], [5, 10], [15, 20]])).toBe(2);
  });

  test("handles non-overlapping meetings", () => {
    expect(minMeetingRooms([[7, 10], [2, 4]])).toBe(1);
  });

  test("handles empty input", () => {
    expect(minMeetingRooms([])).toBe(0);
  });
});
