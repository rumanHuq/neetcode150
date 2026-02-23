/**
 * 973. K Closest Points to Origin
 * https://leetcode.com/problems/k-closest-points-to-origin/
 * 
 * Given an array of points where points[i] = [xi, yi], return the k closest points to the origin.
 */
function kClosest(points, k) {
  const maxHeap = [];
  
  for (const point of points) {
    const dist = point[0] * point[0] + point[1] * point[1];
    maxHeap.push({ point, dist });
    heapifyUpMax(maxHeap, maxHeap.length - 1);
    
    if (maxHeap.length > k) {
      extractMax(maxHeap);
    }
  }
  
  return maxHeap.map(item => item.point);
}

function heapifyUpMax(heap, idx) {
  while (idx > 0) {
    const parentIdx = Math.floor((idx - 1) / 2);
    if (heap[idx].dist <= heap[parentIdx].dist) break;
    [heap[idx], heap[parentIdx]] = [heap[parentIdx], heap[idx]];
    idx = parentIdx;
  }
}

function heapifyDownMax(heap, idx) {
  while (true) {
    const leftIdx = 2 * idx + 1;
    const rightIdx = 2 * idx + 2;
    let largestIdx = idx;
    
    if (leftIdx < heap.length && heap[leftIdx].dist > heap[largestIdx].dist) {
      largestIdx = leftIdx;
    }
    if (rightIdx < heap.length && heap[rightIdx].dist > heap[largestIdx].dist) {
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

export default kClosest;
