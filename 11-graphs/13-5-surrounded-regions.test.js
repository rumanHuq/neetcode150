import { describe, it, expect } from "bun:test";
import solve from "./surrounded-regions.js";

describe("surrounded-regions", () => {
  it("should flip surrounded O's to X", () => {
    const board = [
      ["X", "X", "X", "X"],
      ["X", "O", "O", "X"],
      ["X", "X", "O", "X"],
      ["X", "O", "X", "X"],
    ];
    solve(board);
    expect(board).toEqual([
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
      ["X", "O", "X", "X"],
    ]);
  });

  it("should not change board with no surrounded regions", () => {
    const board = [
      ["X", "X", "X"],
      ["X", "X", "X"],
      ["X", "X", "X"],
    ];
    const original = JSON.parse(JSON.stringify(board));
    solve(board);
    expect(board).toEqual(original);
  });

  it("should handle empty board", () => {
    expect(solve([])).toBeUndefined();
    expect(solve(null)).toBeUndefined();
  });

  it("should preserve O's on border", () => {
    const board = [
      ["O", "X", "X", "O", "X"],
      ["X", "X", "X", "O", "X"],
      ["X", "O", "X", "O", "X"],
      ["X", "X", "X", "O", "X"],
      ["O", "X", "X", "O", "X"],
    ];
    solve(board);
    expect(board[0][0]).toBe("O");
    expect(board[0][3]).toBe("O");
    expect(board[4][0]).toBe("O");
    expect(board[4][3]).toBe("O");
  });
});
