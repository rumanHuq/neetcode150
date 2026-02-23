/**
 * 213. House Robber II
 * https://leetcode.com/problems/house-robber-ii/
 * 
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
 */
function rob(nums) {
  if (nums.length === 1) return nums[0];
  
  const robLinear = (nums) => {
    let prev1 = 0;
    let prev2 = 0;
    for (const num of nums) {
      const temp = prev1;
      prev1 = Math.max(prev1, prev2 + num);
      prev2 = temp;
    }
    return prev1;
  };
  
  return Math.max(robLinear(nums.slice(0, -1)), robLinear(nums.slice(1)));
}

export default rob;
