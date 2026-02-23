/**
 * 1891. Merge Triplets to Form Target Triplet
 * https://leetcode.com/problems/merge-triplets-to-form-target-triplet/
 * 
 * Check if we can form target triplet from valid triplets.
 */
function mergeTriplets(triplets, target) {
  let x = 0, y = 0, z = 0;

  for (const [a, b, c] of triplets) {
    if (a <= target[0] && b <= target[1] && c <= target[2]) {
      x = Math.max(x, a);
      y = Math.max(y, b);
      z = Math.max(z, c);
    }
  }

  return x === target[0] && y === target[1] && z === target[2];
}

export default mergeTriplets;
