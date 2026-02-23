/**
 * 703. Kth Largest Element in a Stream
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/
 * 
 * Design a class to find the kth largest element in a stream.
 */
class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.heap = [];
    for (const num of nums) {
      this.add(num);
    }
  }

  add(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
    
    if (this.heap.length > this.k) {
      this.removeMin();
    }
    
    return this.heap[0];
  }

  heapifyUp(idx) {
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[idx] >= this.heap[parentIdx]) break;
      [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
      idx = parentIdx;
    }
  }

  heapifyDown(idx) {
    while (true) {
      const leftIdx = 2 * idx + 1;
      const rightIdx = 2 * idx + 2;
      let smallestIdx = idx;
      
      if (leftIdx < this.heap.length && this.heap[leftIdx] < this.heap[smallestIdx]) {
        smallestIdx = leftIdx;
      }
      if (rightIdx < this.heap.length && this.heap[rightIdx] < this.heap[smallestIdx]) {
        smallestIdx = rightIdx;
      }
      
      if (smallestIdx === idx) break;
      [this.heap[idx], this.heap[smallestIdx]] = [this.heap[smallestIdx], this.heap[idx]];
      idx = smallestIdx;
    }
  }

  removeMin() {
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown(0);
    }
    return min;
  }
}

export default KthLargest;
