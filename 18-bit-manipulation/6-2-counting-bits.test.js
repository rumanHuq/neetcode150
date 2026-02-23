import { describe, test, expect } from "bun:test";
import countBits from "./counting-bits.js";

describe("Counting Bits", () => {
  test("counts bits for 2", () => {
    expect(countBits(2)).toEqual([0, 1, 1]);
  });

  test("counts bits for 5", () => {
    expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
  });

  test("counts bits for 0", () => {
    expect(countBits(0)).toEqual([0]);
  });
});
