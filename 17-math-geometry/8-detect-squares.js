/**
 * 2011. Detect Squares
 * https://leetcode.com/problems/detect-squares/
 * 
 * You are given a stream of points on a 2D plane. Design an algorithm that:
 * - Adds a point (x, y) to the collection of points.
 * - Counts the number of squares that have all four corners in the collection.
 */
class DetectSquares {
  constructor() {
    this.pointCount = new Map();
  }

  add(point) {
    const key = `${point[0]},${point[1]}`;
    this.pointCount.set(key, (this.pointCount.get(key) || 0) + 1);
  }

  count(point) {
    const [x, y] = point;
    let total = 0;
    
    for (let dx = -1000; dx <= 1000; dx++) {
      const x1 = x + dx;
      if (x1 < 0 || x1 > 2000) continue;
      
      const y1 = y;
      const key1 = `${x1},${y1}`;
      if (!this.pointCount.has(key1)) continue;
      const count1 = this.pointCount.get(key1);
      
      const y2 = y + Math.abs(dx);
      if (y2 > 2000) continue;
      
      const key2 = `${x},${y2}`;
      const key3 = `${x1},${y2}`;
      
      if (this.pointCount.has(key2) && this.pointCount.has(key3)) {
        const count2 = this.pointCount.get(key2);
        const count3 = this.pointCount.get(key3);
        total += count1 * count2 * count3;
      }
      
      const y3 = y - Math.abs(dx);
      if (y3 < 0) continue;
      
      const key4 = `${x},${y3}`;
      const key5 = `${x1},${y3}`;
      
      if (this.pointCount.has(key4) && this.pointCount.has(key5)) {
        const count4 = this.pointCount.get(key4);
        const count5 = this.pointCount.get(key5);
        total += count1 * count4 * count5;
      }
    }
    
    return total;
  }
}

export default DetectSquares;
