/**
 * 238. Product of Array Except Self
 * https://leetcode.com/problems/product-of-array-except-self/
 *
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 */
export function productExceptSelf(nums) {
  let result = Array(nums.length).fill(1);
  let prefix = 1;
  let suffix = 1;

  nums.forEach((num, idx) => {
    result[idx] = prefix;
    prefix *= num;
  });


  structuredClone(nums).reverse().forEach((num, idx) => {
    result[idx] *= suffix;
    suffix *= num;
  });

  console.log({ result });

  return result;
}

