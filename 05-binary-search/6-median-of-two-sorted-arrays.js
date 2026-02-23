/**
 * 4. Median of Two Sorted Arrays
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 * 
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 */
function findMedianSortedArrays(nums1, nums2) {
  const A = nums1.length > nums2.length ? nums2 : nums1;
  const B = nums1.length > nums2.length ? nums1 : nums2;
  const m = A.length;
  const n = B.length;
  
  let left = 0;
  let right = m;
  
  while (left <= right) {
    const partitionA = Math.floor((left + right) / 2);
    const partitionB = Math.floor((m + n + 1) / 2) - partitionA;
    
    const maxLeftA = partitionA === 0 ? -Infinity : A[partitionA - 1];
    const minRightA = partitionA === m ? Infinity : A[partitionA];
    const maxLeftB = partitionB === 0 ? -Infinity : B[partitionB - 1];
    const minRightB = partitionB === n ? Infinity : B[partitionB];
    
    if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
      if ((m + n) % 2 === 0) {
        return (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;
      } else {
        return Math.max(maxLeftA, maxLeftB);
      }
    } else if (maxLeftA > minRightB) {
      right = partitionA - 1;
    } else {
      left = partitionA + 1;
    }
  }
  return 0;
}

export default findMedianSortedArrays;
