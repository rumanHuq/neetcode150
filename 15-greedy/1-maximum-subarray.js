/**
 * 53. Maximum Subarray
 * https://leetcode.com/problems/maximum-subarray/
 * 
 * Find the contiguous subarray with the largest sum.
 */
function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

export default maxSubArray;
