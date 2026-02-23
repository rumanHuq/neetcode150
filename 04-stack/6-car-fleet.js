/**
 * 853. Car Fleet
 * https://leetcode.com/problems/car-fleet/
 * 
 * There are n cars going to the same destination along a one-lane road. The destination is at position target. Each car i has a starting position position[i] and a speed speed[i]. A car can catch up to the car in front of it. Return the number of car fleets that will arrive at the destination.
 */
function carFleet(target, position, speed) {
  const n = position.length;
  if (n === 0) return 0;
  
  const cars = position.map((p, i) => ({ pos: p, time: (target - p) / speed[i] }));
  cars.sort((a, b) => b.pos - a.pos);
  
  let fleets = 1;
  let maxTime = cars[0].time;
  
  for (let i = 1; i < n; i++) {
    if (cars[i].time > maxTime) {
      fleets++;
      maxTime = cars[i].time;
    }
  }
  return fleets;
}

export default carFleet;
