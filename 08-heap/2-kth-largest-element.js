/**
 * 215. Kth Largest Element in an Array
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 * 
 * Given an integer array nums and integer k, return the kth largest element.
 */
function findKthLargest(nums, k) {
  const targetIdx = nums.length - k;
  
  function quickSelect(left, right) {
    const pivot = nums[right];
    let p = left;
    
    for (let i = left; i < right; i++) {
      if (nums[i] <= pivot) {
        [nums[i], nums[p]] = [nums[p], nums[i]];
        p++;
      }
    }
    [nums[p], nums[right]] = [nums[right], nums[p]];
    
    if (p === targetIdx) return nums[p];
    if (p < targetIdx) return quickSelect(p + 1, right);
    return quickSelect(left, p - 1);
  }
  
  return quickSelect(0, nums.length - 1);
}

export default findKthLargest;
