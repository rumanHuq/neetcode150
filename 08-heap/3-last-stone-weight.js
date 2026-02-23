/**
 * 1046. Last Stone Weight
 * https://leetcode.com/problems/last-stone-weight/
 * 
 * You are given an array of integers stones where stones[i] is the weight of the ith stone.
 */
function lastStoneWeight(stones) {
  const maxHeap = [];
  
  for (const stone of stones) {
    maxHeap.push(stone);
    heapifyUpMax(maxHeap, maxHeap.length - 1);
  }
  
  while (maxHeap.length > 1) {
    const y = extractMax(maxHeap);
    const x = extractMax(maxHeap);
    
    if (x !== y) {
      const diff = y - x;
      maxHeap.push(diff);
      heapifyUpMax(maxHeap, maxHeap.length - 1);
    }
  }
  
  return maxHeap.length === 0 ? 0 : maxHeap[0];
}

function heapifyUpMax(heap, idx) {
  while (idx > 0) {
    const parentIdx = Math.floor((idx - 1) / 2);
    if (heap[idx] <= heap[parentIdx]) break;
    [heap[idx], heap[parentIdx]] = [heap[parentIdx], heap[idx]];
    idx = parentIdx;
  }
}

function heapifyDownMax(heap, idx) {
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

function extractMax(heap) {
  const max = heap[0];
  const last = heap.pop();
  if (heap.length > 0) {
    heap[0] = last;
    heapifyDownMax(heap, 0);
  }
  return max;
}

export default lastStoneWeight;
