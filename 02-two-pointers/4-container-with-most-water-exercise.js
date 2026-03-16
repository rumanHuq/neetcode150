/**
 * 11. Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 *
 * Given an integer array height of length n, there are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water.
 *
 * Hint: Two pointers from both ends. Height of water = min(height[left], height[right])
 */
export function maxArea(heights) {
  let left = 0;
  let right = heights.length - 1;
  let area = 0;

  while (left < right) {
    const height = Math.min(heights[left], heights[right]);
    const width = right - left;
    area = Math.max(height * width, area);

    if (heights[left] <= heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return area;
}
