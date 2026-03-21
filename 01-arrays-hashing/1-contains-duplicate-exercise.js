/**
 * 217. Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 *
 * Given an integer array nums, return true if any value appears at least twice in the array.
 *
 * Hint: Use a Set to track seen elements
 */
export function containsDuplicate(nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (map.has(element)) return true;
    map.set(element, i);
  }

  return false;
}
