/**
 * 424. Longest Repeating Character Replacement
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 * Solution: https://www.youtube.com/watch?v=yoEC3ZjYiko
 *
 * You are given a string s and an integer k. You can choose any character of the string
 * and change it to any other uppercase English character. You can perform this operation
 * at most k times. Return the length of the longest substring containing the same letter
 * you can get.
 *
 * =============================================================================
 * REVISION MARKS
 * =============================================================================
 *
 * KEY CONCEPT: Sliding Window with Character Count
 * -----------------------------------------------
 * We maintain a window [left, right] and track counts of each character.
 * The window is VALID when: windowSize - maxCount <= k
 *
 * Where maxCount = frequency of the MOST FREQUENT character in window
 *
 * Why this works:
 * - windowSize - maxCount = characters that are NOT the dominant char
 * - These are exactly the characters we'd need to replace
 * - If that count <= k, we can make all chars the same with <= k replacements
 *
 * THE TRICKY PART (Why most get confused):
 * ----------------------------------------
 * topFreq = the HIGHEST character count we've EVER seen in ANY window
 * It NEVER decreases - even when we shrink the window and lose that character!
 *
 * Example walkthrough with s="ABAB", k=1:
 *
 * Step 1: right=0, char='A', map={A:1}, topFreq=1
 *         window="A", size=1, diff=0 <= 1 ✓
 *
 * Step 2: right=1, char='B', map={A:1,B:1}, topFreq=1 (still!)
 *         window="AB", size=2, diff=1 <= 1 ✓
 *
 * Step 3: right=2, char='A', map={A:2,B:1}, topFreq=2 (A has 2 now!)
 *         window="ABA", size=3, diff=1 <= 1 ✓
 *
 * Step 4: right=3, char='B', map={A:2,B:2}, topFreq=2
 *         window="ABAB", size=4, diff=2 > 1 ✗
 *         We shrink: remove 'A' at left=0, map={A:1,B:2}, left=1
 *         Window="BAB", size=3, diff=3-2=1 <= 1 ✓
 *
 * Notice: topFreq was 2 (when A had count 2), and we KEEP it as 2
 * even after shrinking! This is safe because:
 * - We found a valid window of size 3 with topFreq=2
 * - If we tried a smaller window, we can't get a LONGER valid window
 * - So keeping topFreq high never hurts us
 *
 * SLIDING WINDOW PATTERN:
 * -----------------------
 * 1. Expand: add s[right], update map and maxCount
 * 2. Shrink: while window invalid (diff > k), remove s[left]
 * 3. Update: longest = max(longest, windowSize)
 *
 * WHY TWO POINTERS OVER TWO POINTERS + FREQ ARRAY:
 * -------------------------------------------------
 * - map tracks ALL character counts (O(26) space)
 * - We only need maxCount to determine validity
 * - No need to know WHICH character is most frequent, just HOW MANY of it
 *
 * COMMON MISTAKE:
 * ---------------
 * Trying to track which character to replace, but we don't need to!
 * The formula windowSize - maxCount tells us exactly how many replacements
 * are needed (regardless of which characters they are).
 *
 * =============================================================================
 *
 * Hint: Track count of each char. If (windowSize - maxCount) > k, shrink window.
 */
export function characterReplacement(s, k) {
  let map = {};
  let longest = 0;
  let topFreq = 0;

  let left = 0;
  let right = 0;
  let step = 1;

  console.log(`Input: s="${s}", k=${k}\n`);
  console.log("=".repeat(70));
  console.log("topFreq = highest frequency of ANY character seen in ANY window so far");
  console.log("It does NOT decrease when we shrink the window!");
  console.log("This is safe because a smaller window won't give us a longer answer.");
  console.log("=".repeat(70) + "\n");

  while (right < s.length) {
    let rightChar = s[right];
    map[rightChar] = (map[rightChar] ?? 0) + 1;

    console.log(`[Step ${step}] OUTER: right=${right}, char='${rightChar}'`);
    console.log(`              map=${JSON.stringify(map)}`);

    // topFreq only increases when the NEW character's count exceeds previous max
    // It does NOT update every iteration - only when count becomes larger
    // Example: after step 1 (A:1), topFreq=1. step 2 (B:1) doesn't change topFreq
    //          step 3 (A:2) DOES change topFreq to 2 because A's count is now 2
    topFreq = Math.max(topFreq, map[rightChar]);
    console.log(`              topFreq=${topFreq} (highest char count: '${rightChar}' now has ${map[rightChar]})`);

    // (right - left + 1) = window size
    // topFreq = max frequency of ANY char in current window
    // diff = window size - topFreq = characters that are NOT the dominant char
    //       (these are the ones we'd need to replace to make all chars the same)
    // if diff > k: window is INVALID, need to shrink from left
    while ((right - left + 1) - topFreq > k) {
      let leftChar = s[left];
      let currentWindowSize = right - left + 1;
      let diff = currentWindowSize - topFreq;
      console.log(`\n[Step ${step}] INNER: window="${s.slice(left, right + 1)}", size=${currentWindowSize}`);
      console.log(`              ${currentWindowSize} - ${topFreq} = ${diff} > ${k}? YES - need to shrink`);
      console.log(`              removing leftChar='${leftChar}' at index ${left}`);

      map[leftChar]--;
      left++;

      console.log(`              map=${JSON.stringify(map)}, left now=${left}`);
      step++;

      let newWindowSize = right - left + 1;
      console.log(`              new window="${s.slice(left, right + 1)}", size=${newWindowSize}`);
      console.log(`              ${newWindowSize} - ${topFreq} = ${newWindowSize - topFreq} <= ${k}? NO (shrink again)`);
    }

    let windowSize = right - left + 1;
    console.log(`\n[Step ${step}] WINDOW VALID: "${s.slice(left, right + 1)}"`);
    console.log(`              windowSize=${windowSize}, topFreq=${topFreq}`);
    console.log(`              ${windowSize} - ${topFreq} = ${windowSize - topFreq} <= ${k} ✓`);
    console.log(`              We can make this substring uniform with ${windowSize - topFreq} replacements\n`);

    longest = Math.max(longest, windowSize);
    console.log(`[Step ${step}] longest=${longest}, window=[${left},${right}]\n`);
    right++;
    step++;
  }

  return longest;
}

