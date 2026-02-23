import { describe, test, expect } from "bun:test";
import exist from "./word-search.js";

describe("Word Search", () => {
  test("finds word in board", () => {
    const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    expect(exist(board, "ABCCED")).toBe(true);
  });

  test("finds word SEE", () => {
    const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    expect(exist(board, "SEE")).toBe(true);
  });

  test("does not find word ABCB", () => {
    const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    expect(exist(board, "ABCB")).toBe(false);
  });
});
