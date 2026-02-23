import { describe, test, expect } from "bun:test";
import { findItinerary } from "./reconstruct-itinerary.js";

describe("reconstruct-itinerary", () => {
  test("example 1", () => {
    const tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]];
    expect(findItinerary(tickets)).toEqual(["JFK", "MUC", "LHR", "SFO", "SJC"]);
  });

  test("example 2", () => {
    const tickets = [["JFK", "KUL"], ["JFK", "NRT"], ["NRT", "JFK"]];
    expect(findItinerary(tickets)).toEqual(["JFK", "NRT", "JFK", "KUL"]);
  });

  test("single ticket", () => {
    const tickets = [["JFK", "AAA"]];
    expect(findItinerary(tickets)).toEqual(["JFK", "AAA"]);
  });

  test("multiple tickets from same airport", () => {
    const tickets = [["JFK", "AAA"], ["JFK", "BBB"], ["AAA", "CCC"], ["BBB", "CCC"]];
    const result = findItinerary(tickets);
    expect(result[0]).toBe("JFK");
    expect(result[result.length - 1]).toBe("CCC");
  });

  test("circular route", () => {
    const tickets = [["JFK", "AAA"], ["AAA", "BBB"], ["BBB", "JFK"]];
    const result = findItinerary(tickets);
    expect(result).toEqual(["JFK", "AAA", "BBB", "JFK"]);
  });

  test("two nodes", () => {
    const tickets = [["JFK", "SFO"]];
    expect(findItinerary(tickets)).toEqual(["JFK", "SFO"]);
  });
});
