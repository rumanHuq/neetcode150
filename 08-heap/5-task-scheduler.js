/**
 * 621. Task Scheduler
 * https://leetcode.com/problems/task-scheduler/
 * 
 * Given a characters array tasks, where each character represents an English uppercase task, 
 * schedule the tasks such that the CPU finishes all tasks with minimum idle time.
 */
function leastInterval(tasks, n) {
  const freq = {};
  for (const task of tasks) {
    freq[task] = (freq[task] || 0) + 1;
  }
  
  const maxFreq = Math.max(...Object.values(freq));
  const maxCount = Object.values(freq).filter(f => f === maxFreq).length;
  
  const partitions = maxFreq - 1;
  const emptySlots = partitions * (n - maxCount + 1);
  const availableTasks = tasks.length - maxFreq * maxCount;
  const idle = Math.max(0, emptySlots - availableTasks);
  
  return tasks.length + idle;
}

export default leastInterval;
