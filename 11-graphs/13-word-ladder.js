function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const queue = [[beginWord, 1]];

  while (queue.length > 0) {
    const [word, length] = queue.shift();

    if (word === endWord) return length;

    const chars = word.split('');
    for (let i = 0; i < chars.length; i++) {
      const originalChar = chars[i];
      for (let c = 97; c <= 122; c++) {
        chars[i] = String.fromCharCode(c);
        const newWord = chars.join('');
        if (wordSet.has(newWord)) {
          wordSet.delete(newWord);
          queue.push([newWord, length + 1]);
        }
      }
      chars[i] = originalChar;
    }
  }

  return 0;
}

export default ladderLength;
