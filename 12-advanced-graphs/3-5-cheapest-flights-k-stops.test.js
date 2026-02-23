import { describe, test, expect } from "bun:test";
import { findCheapestPrice } from "./cheapest-flights-k-stops.js";

describe("cheapest-flights-k-stops", () => {
  test("example 1", () => {
    const n = 4;
    const flights = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]];
    const src = 0;
    const dst = 3;
    const k = 1;
    expect(findCheapestPrice(n, flights, src, dst, k)).toBe(700);
  });

  test("example 2", () => {
    const n = 3;
    const flights = [[0, 1, 100], [1, 2, 100], [0, 2, 500]];
    const src = 0;
    const dst = 2;
    const k = 0;
    expect(findCheapestPrice(n, flights, src, dst, k)).toBe(500);
  });

  test("example 3", () => {
    const n = 3;
    const flights = [[0, 1, 100], [1, 2, 100], [0, 2, 500]];
    const src = 0;
    const dst = 2;
    const k = 1;
    expect(findCheapestPrice(n, flights, src, dst, k)).toBe(500);
  });

  test("direct flight allowed", () => {
    const n = 2;
    const flights = [[0, 1, 100]];
    const src = 0;
    const dst = 1;
    const k = 0;
    expect(findCheapestPrice(n, flights, src, dst, k)).toBe(100);
  });

  test("no path exists", () => {
    const n = 4;
    const flights = [[0, 1, 100], [2, 3, 100]];
    const src = 0;
    const dst = 3;
    const k = 2;
    expect(findCheapestPrice(n, flights, src, dst, k)).toBe(-1);
  });

  test("multiple stops available", () => {
    const n = 5;
    const flights = [[0, 1, 10], [1, 2, 10], [2, 3, 10], [3, 4, 10], [0, 2, 50], [0, 3, 100]];
    const src = 0;
    const dst = 4;
    const k = 3;
    expect(findCheapestPrice(n, flights, src, dst, k)).toBe(110);
  });

  test("same source and destination", () => {
    const n = 2;
    const flights = [[0, 1, 100]];
    const src = 0;
    const dst = 0;
    const k = 0;
    expect(findCheapestPrice(n, flights, src, dst, k)).toBe(0);
  });

  test("k stops equals path length", () => {
    const n = 4;
    const flights = [[0, 1, 100], [1, 2, 100], [2, 3, 100]];
    const src = 0;
    const dst = 3;
    const k = 2;
    expect(findCheapestPrice(n, flights, src, dst, k)).toBe(300);
  });
});
