import { describe, test, expect } from "bun:test";
import { decode, encode } from "./8-encode-and-decode-strings-exercise.js";

describe("Encode and Decode Strings", () => {
  test("encodes and decodes strings", () => {
    const strs = ["hello", "world"];
    const encoded = encode(strs);
    expect(decode(encoded)).toEqual(strs);
  });

  test("handles empty array", () => {
    expect(decode(encode([]))).toEqual([]);
  });

  test("handles strings with special characters", () => {
    const strs = ["#", "##", "123#456"];
    const encoded = encode(strs);
    expect(decode(encoded)).toEqual(strs);
  });
});
