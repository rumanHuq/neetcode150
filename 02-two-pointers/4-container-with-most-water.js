/**
 * 11. Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 * 
 * Given an integer array height of length n, there are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water.
 */
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;
  
  while (left < right) {
    const h = Math.min(height[left], height[right]);
    const w = right - left;
    maxWater = Math.max(maxWater, h * w);
    
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
}

export default maxArea;
