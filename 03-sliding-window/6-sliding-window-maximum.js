/**
 * 239. Sliding Window Maximum
 * https://leetcode.com/problems/sliding-window-maximum/
 * 
 * You are given an array of integers nums, there is a sliding window of size k which is moving from the very left to the very right. You can only see the k numbers in the window. Return the max sliding window.
 */
function maxSlidingWindow(nums, k) {
  const result = [];
  const deque = [];
  
  for (let i = 0; i < nums.length; i++) {
    while (deque.length && deque[0] < i - k + 1) deque.shift();
    
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) deque.pop();
    
    deque.push(i);
    
    if (i >= k - 1) result.push(nums[deque[0]]);
  }
  return result;
}

export default maxSlidingWindow;
