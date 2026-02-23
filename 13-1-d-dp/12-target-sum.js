function findTargetSumWays(nums, target) {
  const n = nums.length;
  const sum = nums.reduce((a, b) => a + b, 0);
  
  if (Math.abs(target) > sum) return 0;
  
  const offset = sum;
  const dp = new Array(2 * sum + 1).fill(0);
  dp[offset] = 1;
  
  for (const num of nums) {
    const newDp = new Array(2 * sum + 1).fill(0);
    for (let i = 0; i < dp.length; i++) {
      if (dp[i] > 0) {
        if (i + num < dp.length) newDp[i + num] += dp[i];
        if (i - num >= 0) newDp[i - num] += dp[i];
      }
    }
    dp.length = 0;
    dp.push(...newDp);
  }
  
  return dp[offset + target];
}

export default findTargetSumWays;
