/**
 * 134. Gas Station
 * https://leetcode.com/problems/gas-station/
 * 
 * Find the starting index where you can complete the circuit.
 */
function canCompleteCircuit(gas, cost) {
  let total = 0;
  let current = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];
    current += gas[i] - cost[i];

    if (current < 0) {
      start = i + 1;
      current = 0;
    }
  }

  return total >= 0 ? start : -1;
}

export default canCompleteCircuit;
