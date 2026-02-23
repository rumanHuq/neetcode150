/**
 * 981. Time Based Key-Value Store
 * https://leetcode.com/problems/time-based-key-value-store/
 * 
 * Design a time-based key-value data structure that can store multiple values for the same key at different time stamps.
 */
class TimeMap {
  constructor() {
    this.map = new Map();
  }
  
  set(key, value, timestamp) {
    if (!this.map.has(key)) {
      this.map.set(key, []);
    }
    this.map.get(key).push({ value, timestamp });
  }
  
  get(key, timestamp) {
    const values = this.map.get(key);
    if (!values) return "";
    
    let left = 0;
    let right = values.length - 1;
    let result = "";
    
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (values[mid].timestamp <= timestamp) {
        result = values[mid].value;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  }
}

export default TimeMap;
