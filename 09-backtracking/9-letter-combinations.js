function letterCombinations(digits) {
  if (!digits.length) return [];

  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  const result = [];

  function backtrack(index, current) {
    if (index === digits.length) {
      result.push(current.join(''));
      return;
    }

    const letters = map[digits[index]];
    for (const letter of letters) {
      current.push(letter);
      backtrack(index + 1, current);
      current.pop();
    }
  }

  backtrack(0, []);
  return result;
}

export default letterCombinations;
