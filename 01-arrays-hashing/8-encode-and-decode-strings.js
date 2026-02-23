/**
 * 394. Encode and Decode Strings
 * https://leetcode.com/problems/encode-and-decode-strings/
 * 
 * Design an algorithm to encode a list of strings to a string and decode it back.
 */
function encode(strs) {
  return strs.map(str => str.length + "#" + str).join("");
}

function decode(str) {
  const result = [];
  let i = 0;
  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") j++;
    const len = parseInt(str.slice(i, j));
    result.push(str.slice(j + 1, j + 1 + len));
    i = j + 1 + len;
  }
  return result;
}

export { encode, decode };
export default { encode, decode };
