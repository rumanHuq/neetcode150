import { describe, test, expect } from "bun:test";
import hammingWeight from "./number-of-1-bits.js";

describe("Number of 1 Bits", () => {
  test("counts 1 bits in 11", () => {
    expect(hammingWeight(11)).toBe(3);
  });

  test("counts 1 bits in 128", () => {
    expect(hammingWeight(128)).toBe(1);
  });

  test("counts 1 bits in 0", () => {
    expect(hammingWeight(0)).toBe(0);
  });
});
