/**
 * 347. Top K Frequent Elements
 * https://leetcode.com/problems/top-k-frequent-elements/
 *
 * Given an integer array nums and an integer k, return the k most frequent elements.
 */
export function topKFrequent(nums, k) {
  // Step 1: Count frequency of each element
  const freq = {};
  for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  // Step 2: Bucket sort by frequency
  // buckets[i] contains elements that appear i times
  // Size is nums.length + 1 because max frequency possible is nums.length
  const buckets = Array.from({ length: nums.length + 1 }, () => []);
  for (const [num, count] of Object.entries(freq)) {
    buckets[count].push(parseInt(num));
  }

  // Step 3: Collect elements from highest frequency buckets
  const result = [];
  for (let i = buckets.length - 1; i > 0 && result.length < k; i--) {
    if (buckets[i].length > 0) result.push(...buckets[i]);
  }

  return result.slice(0, k);
}
