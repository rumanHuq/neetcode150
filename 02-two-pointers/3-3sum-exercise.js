/**
 * 15. 3Sum
 * https://leetcode.com/problems/3sum/
 * SOLUTION: https://www.youtube.com/watch?v=PShx8lzd8_E
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * Hint: Sort array, then use two pointers for remaining two numbers
 */


/**
 *
 *
 * @export
 * @param {number[]} nums
 */
export function threeSum(nums) {
  const sorted = nums.toSorted((a, b) => a - b);
  const result = [];
  for (let i = 0; i < sorted.length - 2; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;

    let j = i + 1;
    let k = sorted.length - 1;

    while (j < k) {
      const sum = sorted[i] + sorted[j] + sorted[k];
      if (sum === 0) {
        result.push([sorted[i], sorted[j], sorted[k]]);

        while (j < k && sorted[j] === sorted[j + 1]) j++;
        while (j < k && sorted[k] === sorted[k - 1]) k--;
        j++;
        k--;

      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }

  return result;
}
