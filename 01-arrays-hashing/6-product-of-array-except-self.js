/**
 * 238. Product of Array Except Self
 * https://leetcode.com/problems/product-of-array-except-self/
 *
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 */
export function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);
  let prefix = 1;

  console.log("Input:", nums);
  console.log("=".repeat(50));

  // ========== PREFIX PASS ==========
  // Goal: result[i] = product of all elements TO THE LEFT of i
  console.log("\n--- PREFIX PASS ---");
  console.log("Purpose: Calculate product of all elements to the LEFT of each index\n");

  for (let i = 0; i < n; i++) {
    console.log(`Index ${i}:`);
    console.log(`  nums[${i}] = ${nums[i]}`);
    console.log(`  prefix (product of all LEFT elements) = ${prefix}`);
    console.log(`  result[${i}] = ${prefix} (assigned prefix)`);

    result[i] = prefix;
    prefix *= nums[i];

    console.log(`  prefix updated to ${prefix} (multiplied by nums[${i}])`);
    console.log(`  result after index ${i}: [${result.join(", ")}]`);
    console.log("");
  }

  console.log("After PREFIX pass:", result);
  console.log("=".repeat(50));

  // ========== SUFFIX PASS ==========
  // Goal: Multiply result[i] by product of all elements TO THE RIGHT of i
  console.log("\n--- SUFFIX PASS ---");
  console.log("Purpose: Multiply each result[i] by product of all elements to the RIGHT\n");

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    console.log(`Index ${i}:`);
    console.log(`  nums[${i}] = ${nums[i]}`);
    console.log(`  suffix (product of all RIGHT elements) = ${suffix}`);
    console.log(`  result[${i}] currently = ${result[i]}`);

    result[i] *= suffix;

    console.log(`  result[${i}] = ${result[i] / suffix} × ${suffix} = ${result[i]}`);

    suffix *= nums[i];

    console.log(`  suffix updated to ${suffix} (multiplied by nums[${i}])`);
    console.log(`  result after index ${i}: [${result.join(", ")}]`);
    console.log("");
  }

  console.log("=".repeat(50));
  console.log("\nFinal Result:", result);

  return result;
}

