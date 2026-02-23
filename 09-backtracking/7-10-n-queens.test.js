import { describe, test, expect } from "bun:test";
import solveNQueens from "./n-queens.js";

describe("N Queens", () => {
  test("solves 4 queens", () => {
    const result = solveNQueens(4);
    expect(result.length).toBe(2);
    expect(result).toContainEqual([".Q..", "...Q", "Q...", "..Q."]);
    expect(result).toContainEqual(["..Q.", "Q...", "...Q", ".Q.."]);
  });

  test("solves 1 queen", () => {
    const result = solveNQueens(1);
    expect(result.length).toBe(1);
    expect(result[0]).toEqual(["Q"]);
  });

  test("solves 2 queens", () => {
    const result = solveNQueens(2);
    expect(result.length).toBe(0);
  });
});
