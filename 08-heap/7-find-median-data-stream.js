/**
 * 295. Find Median from Data Stream
 * https://leetcode.com/problems/find-median-from-data-stream/
 * 
 * Design a data structure that supports adding numbers and finding the median.
 */
class MedianFinder {
  constructor() {
    this.small = [];
    this.large = [];
  }

  addNum(num) {
    if (this.small.length === 0 || num <= -this.small[0]) {
      this.pushMaxHeap(this.small, num);
    } else {
      this.pushMinHeap(this.large, num);
    }
    
    if (this.small.length > this.large.length + 1) {
      const val = this.popMaxHeap(this.small);
      this.pushMinHeap(this.large, val);
    } else if (this.large.length > this.small.length + 1) {
      const val = this.popMinHeap(this.large);
      this.pushMaxHeap(this.small, val);
    }
  }

  findMedian() {
    if (this.small.length > this.large.length) {
      return -this.small[0];
    }
    if (this.large.length > this.small.length) {
      return this.large[0];
    }
    return (-this.small[0] + this.large[0]) / 2;
  }

  pushMaxHeap(heap, val) {
    heap.push(-val);
    this.heapifyUpMax(heap, heap.length - 1);
  }

  pushMinHeap(heap, val) {
    heap.push(val);
    this.heapifyUpMin(heap, heap.length - 1);
  }

  popMaxHeap(heap) {
    const val = -heap[0];
    const last = heap.pop();
    if (heap.length > 0) {
      heap[0] = last;
      this.heapifyDownMax(heap, 0);
    }
    return val;
  }

  popMinHeap(heap) {
    const val = heap[0];
    const last = heap.pop();
    if (heap.length > 0) {
      heap[0] = last;
      this.heapifyDownMin(heap, 0);
    }
    return val;
  }

  heapifyUpMax(heap, idx) {
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (heap[idx] <= heap[parentIdx]) break;
      [heap[idx], heap[parentIdx]] = [heap[parentIdx], heap[idx]];
      idx = parentIdx;
    }
  }

  heapifyDownMax(heap, idx) {
    while (true) {
      const leftIdx = 2 * idx + 1;
      const rightIdx = 2 * idx + 2;
      let largestIdx = idx;
      
      if (leftIdx < heap.length && heap[leftIdx] > heap[largestIdx]) {
        largestIdx = leftIdx;
      }
      if (rightIdx < heap.length && heap[rightIdx] > heap[largestIdx]) {
        largestIdx = rightIdx;
      }
      
      if (largestIdx === idx) break;
      [heap[idx], heap[largestIdx]] = [heap[largestIdx], heap[idx]];
      idx = largestIdx;
    }
  }

  heapifyUpMin(heap, idx) {
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (heap[idx] >= heap[parentIdx]) break;
      [heap[idx], heap[parentIdx]] = [heap[parentIdx], heap[idx]];
      idx = parentIdx;
    }
  }

  heapifyDownMin(heap, idx) {
    while (true) {
      const leftIdx = 2 * idx + 1;
      const rightIdx = 2 * idx + 2;
      let smallestIdx = idx;
      
      if (leftIdx < heap.length && heap[leftIdx] < heap[smallestIdx]) {
        smallestIdx = leftIdx;
      }
      if (rightIdx < heap.length && heap[rightIdx] < heap[smallestIdx]) {
        smallestIdx = rightIdx;
      }
      
      if (smallestIdx === idx) break;
      [heap[idx], heap[smallestIdx]] = [heap[smallestIdx], heap[idx]];
      idx = smallestIdx;
    }
  }
}

export default MedianFinder;
