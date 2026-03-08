/**
 * 128. Longest Consecutive Sequence
 * https://leetcode.com/problems/longest-consecutive-sequence/
 *
 * Given an unsorted array of integers, find the length of the longest consecutive sequence.
 *
 * =========================================
 * WHAT PATTERN DOES THIS PROBLEM BELONG TO?
 * =========================================
 * Hashing / Set for O(1) lookup and duplicate detection.
 *
 * =========================================
 * CRUCIAL INSIGHT FOR OPTIMAL SOLUTION
 * =========================================
 * Using a hash set gives O(1) lookup time.
 * Key insight: Only start counting from the BEGINNING of a sequence
 * (where num-1 doesn't exist in the set). This avoids O(n²) worst case.
 *
 * =========================================
 * TIME & SPACE COMPLEXITY
 * =========================================
 * Time: O(n) - Each element is visited at most twice (once in loop, once in while)
 * Space: O(n) - Set stores all unique elements
 *
 * =========================================
 * EDGE CASES TO REMEMBER
 * =========================================
 * - Empty array [] → returns 0
 * - Single element [1] → returns 1
 * - Already consecutive [1,2,3,4,5] → returns 5
 * - Negative numbers and zeros are handled correctly
 * - Duplicates are automatically ignored by using Set
 *
 * =========================================
 * MISTAKES MADE & HOW TO AVOID THEM
 * =========================================
 * 1. Initially considered sorting the array (O(n log n)) - avoid this!
 *    Set-based approach is faster for this specific case since we need O(1) lookups.
 *
 * 2. BUG FIX: Had `unique.has(range + 1)` instead of `unique.has(num + range)`
 *    This caused returning 6 instead of 7 for [0,3,2,5,4,6,1,1]
 *    Always verify the counter variable in while loops!
 *
 * =========================================
 * ALGORITHM WALKTHROUGH (for [0,3,2,5,4,6,1,1])
 * =========================================
 * Step 1: Create Set → {0,1,2,3,4,5,6}
 *
 * Step 2: Iterate through each number:
 *   - num=0: num-1=-1 not in set → START! Count: 0,1,2,3,4,5,6 → range=7
 *   - num=1: num-1=0 in set → skip (not a sequence start)
 *   - num=2: num-1=1 in set → skip
 *   - num=3: num-1=2 in set → skip
 *   - num=4: num-1=3 in set → skip
 *   - num=5: num-1=4 in set → skip
 *   - num=6: num-1=5 in set → skip
 *
 * Step 3: Return longest = 7 ✓
 */
export function longestConsecutive(nums) {
  /** @type {Set<number>} */
  let unique = new Set(nums);
  let longest = 0;

  for (let num of unique) {
    // Only start counting from the beginning of a sequence
    // (when num-1 doesn't exist in the set)
    if (unique.has(num - 1) === false) {
      let range = 1;

      // Count forward: num+1, num+2, num+3...
      while (unique.has(num + range)) {
        range++;
      }
      longest = Math.max(longest, range);
    }
  }

  return longest;
}
