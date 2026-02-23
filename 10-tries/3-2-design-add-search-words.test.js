import { describe, test, expect, beforeEach } from "bun:test";
import WordDictionary from "./design-add-search-words.js.js";

describe("211. Design Add and Search Words Data Structure", () => {
  let wordDictionary;

  beforeEach(() => {
    wordDictionary = new WordDictionary();
  });

  test("should add and search words", () => {
    wordDictionary.addWord("bad");
    wordDictionary.addWord("dad");
    wordDictionary.addWord("mad");
    expect(wordDictionary.search("pad")).toBe(false);
    expect(wordDictionary.search("bad")).toBe(true);
    expect(wordDictionary.search(".ad")).toBe(true);
    expect(wordDictionary.search("b..")).toBe(true);
  });

  test("should handle dot wildcards", () => {
    wordDictionary.addWord("a");
    wordDictionary.addWord("ab");
    expect(wordDictionary.search("a")).toBe(true);
    expect(wordDictionary.search("a.")).toBe(true);
    expect(wordDictionary.search(".b")).toBe(true);
    expect(wordDictionary.search(".")).toBe(true);
  });

  test("should handle multiple dots", () => {
    wordDictionary.addWord("hello");
    expect(wordDictionary.search("h.l.o")).toBe(true);
    expect(wordDictionary.search(".....")).toBe(true);
    expect(wordDictionary.search("hel.o")).toBe(true);
  });

  test("should handle empty word", () => {
    wordDictionary.addWord("");
    expect(wordDictionary.search("")).toBe(true);
    expect(wordDictionary.search(".")).toBe(false);
  });

  test("should handle not found words", () => {
    wordDictionary.addWord("word");
    expect(wordDictionary.search("ward")).toBe(false);
    expect(wordDictionary.search("wrd")).toBe(false);
    expect(wordDictionary.search("wordd")).toBe(false);
  });

  test("should be case sensitive", () => {
    wordDictionary.addWord("Word");
    expect(wordDictionary.search("Word")).toBe(true);
    expect(wordDictionary.search("word")).toBe(false);
  });
});
