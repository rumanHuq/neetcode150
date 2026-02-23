import { describe, test, expect } from "bun:test";
import reverseBits from "./reverse-bits.js";

describe("Reverse Bits", () => {
  test("reverses bits of 1", () => {
    expect(reverseBits(1)).toBe(2147483648);
  });

  test("reverses bits of 0", () => {
    expect(reverseBits(0)).toBe(0);
  });

  test("reverses bits of 43261596", () => {
    expect(reverseBits(43261596)).toBe(964176192);
  });
});
