/**
 * 11. Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 * 
 * Given an integer array height of length n, there are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * 
 * Hint: Two pointers from both ends. Height of water = min(height[left], height[right])
 */
export function maxArea(height) {
  // Step 1: Initialize left=0, right=length-1
  // Step 2: Calculate area: min(height[left], height[right]) * (right - left)
  // Step 3: Move the pointer with smaller height (might find bigger)
  // Step 4: Track maximum area
  
  // Your code here
}
