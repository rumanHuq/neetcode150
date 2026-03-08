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
  
  console.log("Input encoded string:", str);
  console.log("Length:", str.length);
  console.log("=".repeat(50));
  console.log("\n--- DECODING STEP BY STEP ---\n");
  
  let step = 1;
  while (i < str.length) {
    console.log(`Step ${step}:`);
    console.log(`  Current position (i): ${i}`);
    console.log(`  Remaining string: "${str.slice(i)}"`);
    
    // Find the "#" delimiter
    let j = i;
    console.log(`  Looking for "#" starting at position ${i}...`);
    while (str[j] !== "#") j++;
    console.log(`  Found "#" at position ${j}`);
    
    // Extract length
    const len = parseInt(str.slice(i, j));
    console.log(`  Length prefix: "${str.slice(i, j)}" → ${len}`);
    
    // Extract the actual string
    const start = j + 1;
    const end = j + 1 + len;
    const decodedStr = str.slice(start, end);
    console.log(`  Extracting string from position ${start} to ${end - 1}`);
    console.log(`  Decoded string: "${decodedStr}"`);
    
    result.push(decodedStr);
    console.log(`  Result so far: [${result.map(s => `"${s}"`).join(", ")}]`);
    
    // Move to next
    i = j + 1 + len;
    console.log(`  Moving i to: ${i}`);
    console.log("");
    step++;
  }
  
  console.log("=".repeat(50));
  console.log("\nFinal decoded result:", result);
  return result;
}

export { encode, decode };

// Test
console.log("\n" + "=".repeat(50));
console.log("ENCODE TEST");
console.log("=".repeat(50));
const strings = ["hello", "world", "123"];
const encoded = encode(strings);
console.log("Input:", strings);
console.log("Encoded:", encoded);
console.log("\n" + "=".repeat(50));
console.log("DECODE TEST");
console.log("=".repeat(50));
decode(encoded);
