/**
 * 918. Maximum Sum Circular Subarray
 * https://leetcode.com/problems/maximum-sum-circular-subarray/
 * 
 * Find the maximum sum of a circular subarray.
 */
function maxSubarraySumCircular(nums) {
  let maxSum = nums[0];
  let minSum = nums[0];
  let total = nums[0];
  let maxCurrent = nums[0];
  let minCurrent = nums[0];

  for (let i = 1; i < nums.length; i++) {
    total += nums[i];
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
    maxSum = Math.max(maxSum, maxCurrent);
    minCurrent = Math.min(nums[i], minCurrent + nums[i]);
    minSum = Math.min(minSum, minCurrent);
  }

  if (maxSum < 0) {
    return maxSum;
  }

  return Math.max(maxSum, total - minSum);
}

export default maxSubarraySumCircular;
