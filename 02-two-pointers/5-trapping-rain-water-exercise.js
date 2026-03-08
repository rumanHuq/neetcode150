/**
 * 42. Trapping Rain Water
 * https://leetcode.com/problems/trapping-rain-water/
 * 
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 * 
 * Hint: Two pointers from both ends. Track max height from each side.
 */
export function trap(height) {
  // Step 1: Initialize left=0, right=length-1, leftMax=0, rightMax=0
  // Step 2: Move pointer with smaller height
  // Step 3: If current height >= max, update max
  // Step 4: Otherwise, add (max - current height) to water
  
  // Your code here
}
