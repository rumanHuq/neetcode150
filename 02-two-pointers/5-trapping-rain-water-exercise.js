/**
 * 42. Trapping Rain Water
 * https://leetcode.com/problems/trapping-rain-water/
 *
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 *
 * Approach: Two Pointers - Compare max heights (Recommended)
 * - Initialize leftMax with height[0], rightMax with height[end]
 * - Compare leftMax vs rightMax, move the pointer with smaller max
 * - Update max BEFORE calculating water for that position
 * - Time: O(n), Space: O(1)
 *
 * Reference: https://www.youtube.com/watch?v=ZI2z5pq0TqA
 */
export function trap(height) {
  let leftPtr = 0;
  let rightPtr = height.length - 1;
  let leftMax = height[leftPtr];
  let rightMax = height[rightPtr];
  let water = 0;

  while (leftPtr < rightPtr) {
    if (leftMax < rightMax) {
      leftPtr++;
      leftMax = Math.max(leftMax, height[leftPtr]);

      water+= leftMax - height[leftPtr]
    } else {
      rightPtr--;
      rightMax = Math.max(rightMax, height[rightPtr]);
      water+= rightMax - height[rightPtr]
    }
  }

  return water;
}
