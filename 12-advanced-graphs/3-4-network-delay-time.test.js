import { describe, test, expect } from "bun:test";
import { networkDelayTime } from "./network-delay-time.js";

describe("network-delay-time", () => {
  test("example 1", () => {
    const times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]];
    const n = 4;
    const k = 2;
    expect(networkDelayTime(times, n, k)).toBe(2);
  });

  test("example 2", () => {
    const times = [[1, 2, 1]];
    const n = 2;
    const k = 1;
    expect(networkDelayTime(times, n, k)).toBe(1);
  });

  test("example 3", () => {
    const times = [[1, 2, 1]];
    const n = 2;
    const k = 2;
    expect(networkDelayTime(times, n, k)).toBe(-1);
  });

  test("all connected from source", () => {
    const times = [[1, 2, 1], [1, 3, 2], [2, 4, 3], [3, 4, 4]];
    const n = 4;
    const k = 1;
    expect(networkDelayTime(times, n, k)).toBe(4);
  });

  test("single node", () => {
    const times = [];
    const n = 1;
    const k = 1;
    expect(networkDelayTime(times, n, k)).toBe(0);
  });

  test("disconnected nodes", () => {
    const times = [[1, 2, 1]];
    const n = 3;
    const k = 1;
    expect(networkDelayTime(times, n, k)).toBe(-1);
  });

  test("chain of nodes", () => {
    const times = [[1, 2, 1], [2, 3, 2], [3, 4, 3], [4, 5, 4]];
    const n = 5;
    const k = 1;
    expect(networkDelayTime(times, n, k)).toBe(10);
  });

  test("multiple paths", () => {
    const times = [[1, 2, 5], [1, 3, 2], [2, 4, 1], [3, 4, 3]];
    const n = 4;
    const k = 1;
    expect(networkDelayTime(times, n, k)).toBe(5);
  });
});
