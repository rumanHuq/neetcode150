import { describe, test, expect } from "bun:test";
import TimeMap from "./time-based-key-value-store.js";

describe("Time Based Key-Value Store", () => {
  test("sets and gets values", () => {
    const map = new TimeMap();
    map.set("foo", "bar", 1);
    expect(map.get("foo", 1)).toBe("bar");
    expect(map.get("foo", 3)).toBe("bar");
  });

  test("returns empty for unknown key", () => {
    const map = new TimeMap();
    expect(map.get("unknown", 1)).toBe("");
  });
});
