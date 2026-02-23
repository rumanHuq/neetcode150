/**
 * 875. Koko Eating Bananas
 * https://leetcode.com/problems/koko-eating-bananas/
 * 
 * Koko loves to eat bananas. There are n piles of bananas. Koko can decide her bananas-per-hour eating speed. Return the minimum speed to finish eating all bananas within h hours.
 */
function minEatingSpeed(piles, h) {
  let left = 1;
  let right = Math.max(...piles);
  
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let hours = 0;
    for (const pile of piles) {
      hours += Math.ceil(pile / mid);
    }
    if (hours <= h) right = mid;
    else left = mid + 1;
  }
  return left;
}

export default minEatingSpeed;
