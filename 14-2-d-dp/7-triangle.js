function minimumTotal(triangle) {
    const n = triangle.length;
    const dp = Array(n).fill(null).map(() => Array(n).fill(0));
    
    for (let j = 0; j < n; j++) {
        dp[n-1][j] = triangle[n-1][j];
    }
    
    for (let i = n - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            dp[i][j] = Math.min(dp[i+1][j], dp[i+1][j+1]) + triangle[i][j];
        }
    }
    
    return dp[0][0];
}

export default minimumTotal;
