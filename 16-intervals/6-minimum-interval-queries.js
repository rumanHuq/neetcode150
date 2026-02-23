function minimumInterval(intervals, queries) {
  const intervalMap = new Map();
  
  for (const interval of intervals) {
    const key = `${interval[0]}-${interval[1]}`;
    if (!intervalMap.has(key)) {
      intervalMap.set(key, []);
    }
    intervalMap.get(key).push(interval);
  }
  
  const result = [];
  
  for (const query of queries) {
    let minLength = Infinity;
    
    for (const [key, intervalsList] of intervalMap) {
      const [start, end] = key.split('-').map(Number);
      
      if (query >= start && query <= end) {
        const length = end - start;
        minLength = Math.min(minLength, length);
      }
    }
    
    result.push(minLength === Infinity ? -1 : minLength);
  }
  
  return result;
}

export default minimumInterval;
