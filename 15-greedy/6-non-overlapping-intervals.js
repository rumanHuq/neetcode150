/**
 * 435. Non-overlapping Intervals
 * https://leetcode.com/problems/non-overlapping-intervals/
 * 
 * Find minimum intervals to remove to make non-overlapping.
 */
function eraseOverlapIntervals(intervals) {
  if (intervals.length === 0) return 0;

  intervals.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= end) {
      end = intervals[i][1];
    } else {
      count++;
    }
  }

  return count;
}

export default eraseOverlapIntervals;
