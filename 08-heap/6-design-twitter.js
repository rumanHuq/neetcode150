/**
 * 355. Design Twitter
 * https://leetcode.com/problems/design-twitter/
 * 
 * Design a simplified version of Twitter where users can post tweets, 
 * follow/unfollow another user, and see the most recent tweets.
 */
class Twitter {
  constructor() {
    this.tweets = [];
    this.following = new Map();
    this.tweetId = 0;
  }

  postTweet(userId, tweetId) {
    this.tweets.unshift({ userId, tweetId, time: this.tweetId++ });
  }

  follow(followerId, followeeId) {
    if (!this.following.has(followerId)) {
      this.following.set(followerId, new Set());
    }
    this.following.get(followerId).add(followeeId);
  }

  unfollow(followerId, followeeId) {
    if (this.following.has(followerId)) {
      this.following.get(followerId).delete(followeeId);
    }
  }

  getNewsFeed(userId) {
    const feed = [];
    const following = this.following.get(userId) || new Set();
    following.add(userId);
    
    for (const tweet of this.tweets) {
      if (following.has(tweet.userId)) {
        feed.push(tweet.tweetId);
        if (feed.length === 10) break;
      }
    }
    
    return feed;
  }
}

export default Twitter;
