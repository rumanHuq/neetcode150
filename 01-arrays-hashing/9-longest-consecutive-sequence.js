/**
 * 128. Longest Consecutive Sequence
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * 
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 */
export function longestConsecutive(nums) {
  if (nums.length === 0) return 0;
  
  const set = new Set(nums);
  let maxLength = 0;
  
  for (const num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let length = 1;
      while (set.has(current + 1)) {
        current++;
        length++;
      }
      maxLength = Math.max(maxLength, length);
    }
  }
  return maxLength;
}
