/**
 * 394. Encode and Decode Strings
 * https://leetcode.com/problems/encode-and-decode-strings/
 * EXPLANATION: https://www.youtube.com/watch?v=cHJmECeI1Wg
 * Design an algorithm to encode a list of strings to a string and decode it back.
 *
 * Hint: Use length-prefix encoding - prepend length before each string
 */
export function encode(strs) {
  return strs.reduce((acc, curr) => acc.concat(`${curr.length}#${curr}`), "");
}

export function decode(str) {
  let result = [];
  let checkpoint = 0;

  while (checkpoint < str.length) {
    const start = checkpoint;

    while (str[checkpoint] !== '#') {
      checkpoint++;
    }

    const subStrLength = parseInt(str.slice(start, checkpoint), 10);
    checkpoint++;
    const word = str.slice(checkpoint, checkpoint + subStrLength);

    result.push(word);
    checkpoint += subStrLength;
  }

  return result;
}
