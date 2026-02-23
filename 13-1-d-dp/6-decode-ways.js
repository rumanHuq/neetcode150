function numDecodings(s) {
  if (!s || s[0] === '0') return 0;
  
  const n = s.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  
  for (let i = 1; i <= n; i++) {
    if (s[i - 1] !== '0') {
      dp[i] += dp[i - 1];
    }
    
    if (i >= 2) {
      const twoDigits = parseInt(s.slice(i - 2, i));
      if (twoDigits >= 10 && twoDigits <= 26) {
        dp[i] += dp[i - 2];
      }
    }
  }
  
  return dp[n];
}

export default numDecodings;
