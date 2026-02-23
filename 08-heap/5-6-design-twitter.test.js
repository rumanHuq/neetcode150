import { describe, test, expect } from "bun:test";
import Twitter from "./design-twitter.js.js";

describe("355. Design Twitter", () => {
  test("should post tweets and get news feed", () => {
    const twitter = new Twitter();
    twitter.postTweet(1, 5);
    twitter.postTweet(2, 6);
    const feed = twitter.getNewsFeed(1);
    expect(feed).toEqual([5]);
  });

  test("should follow and unfollow users", () => {
    const twitter = new Twitter();
    twitter.postTweet(1, 5);
    twitter.postTweet(2, 6);
    twitter.postTweet(1, 7);
    twitter.follow(1, 2);
    const feed = twitter.getNewsFeed(1);
    expect(feed).toEqual([7, 6, 5]);
  });

  test("should unfollow user", () => {
    const twitter = new Twitter();
    twitter.postTweet(1, 5);
    twitter.postTweet(2, 6);
    twitter.follow(1, 2);
    twitter.unfollow(1, 2);
    const feed = twitter.getNewsFeed(1);
    expect(feed).toEqual([5]);
  });

  test("should limit feed to 10 tweets", () => {
    const twitter = new Twitter();
    twitter.postTweet(1, 1);
    twitter.postTweet(1, 2);
    twitter.postTweet(1, 3);
    twitter.postTweet(1, 4);
    twitter.postTweet(1, 5);
    twitter.postTweet(1, 6);
    twitter.postTweet(1, 7);
    twitter.postTweet(1, 8);
    twitter.postTweet(1, 9);
    twitter.postTweet(1, 10);
    twitter.postTweet(1, 11);
    const feed = twitter.getNewsFeed(1);
    expect(feed.length).toBe(10);
    expect(feed[0]).toBe(11);
  });

  test("should handle empty feed", () => {
    const twitter = new Twitter();
    const feed = twitter.getNewsFeed(1);
    expect(feed).toEqual([]);
  });
});
