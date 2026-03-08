/**
 * MATH FOR TECHNICAL INTERVIEWS: KEY LEARNINGS & FORMULAS
 * * 1. NUMBER BASES
 * - Binary (Base 2) is the foundation of CS.
 * - Each position from right is a power of 2 (2^0, 2^1, 2^2...).
 * - Binary 1011 = (1 * 2^3) + (0 * 2^2) + (1 * 2^1) + (1 * 2^0) = 8 + 0 + 2 + 1 = 11.
 */


/**
 * 2. LOGARITHMS (Base 2)
 * - Definition: To what power must we raise 2 to get n?
 * - Inverse of exponentiation: log2(8) = 3 because 2^3 = 8.
 * - Division rule: How many times can you divide n by 2 to reach 1?
 * - Context: Essential for Binary Search and Tree heights.
 */
const log2 = (n) => Math.log2(n);

/**
 * 3. PERMUTATIONS & FACTORIALS
 * - Permutation: Arrangement where order matters.
 * - Formula for n elements: n! = n * (n-1) * (n-2)... * 1.
 * - Context: Used in exhaustive search or string manipulation problems.
 */
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));


/**
 * 4. SUBSETS (Power Set)
 * - Every element has 2 choices: Include or Exclude.
 * - Total subsets for a set of size n = 2^n.
 * - Includes the empty set and the original set.
 */
const countSubsets = (n) => 2 ** n;

/**
 * 5. ARITHMETIC SEQUENCES
 * - Constant difference between terms (e.g., 1, 2, 3... or 2, 4, 6...).
 * - Sum Formula: ((first + last) * n) / 2.
 * - Context: Analyzing nested loop complexity.
 * Example: 1 + 2 + ... + n = (n^2 + n) / 2 -> O(n^2).
 */
const sumArithmetic = (first, last, n) => ((first + last) * n) / 2;

/**
 * 6. GEOMETRIC SEQUENCES
 * - Constant ratio between terms (e.g., 1, 2, 4, 8...).
 * - Sum Formula: first * (1 - ratio^n) / (1 - ratio).
 * - Context: Counting nodes in a perfect binary tree.
 */
const sumGeometric = (a, r, n) => a * (1 - r ** n) / (1 - r);

/**
 * 7. MODULAR ARITHMETIC
 * - "Wrap around" logic (like a clock).
 * - x % y: If x < y, result is x. Else, subtract y until result < y.
 * - Distributive Property: (a + b) % c = ((a % c) + (b % c)) % c.
 * - Primality: Check divisors in range [2, sqrt(n)].
 * If n % i === 0, it is not prime.
 */
const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};
