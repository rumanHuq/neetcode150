import { describe, test, expect } from "bun:test";
import minimumTotal from "../14-2-d-dp/triangle";

describe("triangle", () => {
  test("[[2],[3,4],[6,5,7],[4,1,8,3]]", () => {
    expect(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])).toBe(11);
  });

  test("[[-10]]", () => {
    expect(minimumTotal([[-10]])).toBe(-10);
  });

  test("single row", () => {
    expect(minimumTotal([[1], [2, 3]])).toBe(3);
  });

  test("flat triangle", () => {
    expect(minimumTotal([[1], [2, 3], [4, 5, 6]])).toBe(7);
  });

  test("[[2],[3,4],[6,5,7],[4,1,8,3],[5,2,9,7,1]]", () => {
    expect(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3], [5, 2, 9, 7, 1]])).toBe(13);
  });
});
