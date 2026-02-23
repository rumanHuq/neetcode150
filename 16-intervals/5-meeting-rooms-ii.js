function minMeetingRooms(intervals) {
  if (intervals.length === 0) return 0;
  
  const startTimes = intervals.map(i => i[0]).sort((a, b) => a - b);
  const endTimes = intervals.map(i => i[1]).sort((a, b) => a - b);
  
  let rooms = 0;
  let j = 0;
  
  for (let i = 0; i < startTimes.length; i++) {
    if (startTimes[i] < endTimes[j]) {
      rooms++;
    } else {
      j++;
    }
  }
  
  return rooms;
}

export default minMeetingRooms;
