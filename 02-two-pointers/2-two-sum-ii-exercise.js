/**
 * 167. Two Sum II - Input Array Is Sorted
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 *
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
 *
 * Hint: Since array is sorted, use two pointers - move based on whether sum is < or > target
 */
export function twoSum(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    const sum = numbers[start] + numbers[end];
    if (sum === target) return [start + 1, end + 1];
    if (sum < target) start++;
    else end--;
  }
  return [];
}
