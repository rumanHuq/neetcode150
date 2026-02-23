function maxCoins(nums) {
    const n = nums.length;
    const points = [1, ...nums, 1];
    const m = n + 2;
    
    const dp = Array(m).fill(null).map(() => Array(m).fill(0));
    
    for (let len = 2; len < m; len++) {
        for (let left = 0; left + len < m; left++) {
            const right = left + len;
            for (let mid = left + 1; mid < right; mid++) {
                dp[left][right] = Math.max(
                    dp[left][right],
                    dp[left][mid] + points[left] * points[mid] * points[right] + dp[mid][right]
                );
            }
        }
    }
    
    return dp[0][m-1];
}

export default maxCoins;
