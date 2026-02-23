import { describe, it, expect } from "bun:test";
import numDecodings from "./6-decode-ways.js";

describe("numDecodings", () => {
  it("should return 1 for 'A'", () => {
    expect(numDecodings("A")).toBe(1);
  });

  it("should return 2 for 'AB'", () => {
    expect(numDecodings("AB")).toBe(2);
  });

  it("should return 0 for '0'", () => {
    expect(numDecodings("0")).toBe(0);
  });

  it("should return 1 for '10'", () => {
    expect(numDecodings("10")).toBe(1);
  });

  it("should handle '226'", () => {
    expect(numDecodings("226")).toBe(3);
  });
});