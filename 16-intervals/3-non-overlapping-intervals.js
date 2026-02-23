function eraseOverlapIntervals(intervals) {
  if (intervals.length === 0) return 0;
  
  intervals.sort((a, b) => a[1] - b[1]);
  
  let end = intervals[0][1];
  let count = 0;
  
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
