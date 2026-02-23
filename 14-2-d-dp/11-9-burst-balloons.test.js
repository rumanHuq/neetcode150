import { describe, test, expect } from "bun:test";
import maxCoins from "../14-2-d-dp/burst-balloons";

describe("burst-balloons", () => {
  test("[3,1,5,8]", () => {
    expect(maxCoins([3, 1, 5, 8])).toBe(167);
  });

  test("[1,2]", () => {
    expect(maxCoins([1, 2])).toBe(4);
  });

  test("[1,2,3,4,5]", () => {
    expect(maxCoins([1, 2, 3, 4, 5])).toBe(110);
  });

  test("single balloon", () => {
    expect(maxCoins([5])).toBe(5);
  });

  test("empty array", () => {
    expect(maxCoins([])).toBe(0);
  });
});
