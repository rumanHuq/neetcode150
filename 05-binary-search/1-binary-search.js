/**
 * 704. Binary Search
 * https://leetcode.com/problems/binary-search/
 * 
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
 */
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

export default search;
