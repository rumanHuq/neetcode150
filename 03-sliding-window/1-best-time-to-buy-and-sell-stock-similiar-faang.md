# FAANG Interview Variations: Best Time to Buy and Sell Stock

**Core Concept**: Track minimum price seen so far, maximize profit

---

## Question 1: Warm-Up (Google)
**"You can buy one stock and sell one stock. What's the maximum profit?"**

### JS Clue 1.1
```javascript
// Need to buy before selling
// Track minimum price seen so far
// Max profit = max(profit at each day, selling today)
```

### JS Clue 1.2
```javascript
// minPrice = min(minPrice, price)
// maxProfit = max(maxProfit, price - minPrice)
```

### Solution
```javascript
function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  
  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  
  return maxProfit;
}
```

---

## Question 2: Max Profit with Cooldown (Amazon)
**"After selling, you must wait one day before buying again."**

### JS Clue 2.1
```javascript
// States:
// - hold[i]: max profit at day i while holding
// - cash[i]: max profit at day i while not holding
// - rest[i]: max profit at day i while in cooldown
```

### JS Clue 2.2
```javascript
// cash[i] = max(cash[i-1], hold[i-1] + prices[i])
// hold[i] = max(hold[i-1], cash[i-1] - prices[i]) // can buy if not sold yesterday
```

### Solution
```javascript
function maxProfitWithCooldown(prices) {
  if (prices.length === 0) return 0;
  
  let cash = 0;
  let hold = -prices[0];
  let rest = 0;
  
  for (let i = 1; i < prices.length; i++) {
    const newCash = Math.max(cash, hold + prices[i]);
    const newHold = Math.max(hold, rest - prices[i]);
    const newRest = Math.max(rest, cash);
    
    cash = newCash;
    hold = newHold;
    rest = newRest;
  }
  
  return Math.max(cash, hold);
}
```

---

## Question 3: Best Time with Transaction Fee (Uber)
**"You can make unlimited transactions but pay fee for each transaction."**

### JS Clue 3.1
```javascript
// States:
// - cash: not holding stock, max profit
// - hold: holding stock, max profit
```

### JS Clue 3.2
```javascript
// cash = max(cash, hold + price - fee)
// hold = max(hold, cash - price)
```

### Solution
```javascript
function maxProfitWithFee(prices, fee) {
  let cash = 0;
  let hold = -prices[0];
  
  for (let i = 1; i < prices.length; i++) {
    cash = Math.max(cash, hold + prices[i] - fee);
    hold = Math.max(hold, cash - prices[i]);
  }
  
  return cash;
}
```

---

## Question 4: Best Time with K Transactions (Microsoft)
**"You can make at most k transactions."**

### JS Clue 4.1
```javascript
// DP approach:
// dp[t][i] = max profit with t transactions up to day i
```

### JS Clue 4.2
```javascript
// dp[t][i] = max(dp[t][i-1], prices[i] + maxDiff)
// where maxDiff = max(dp[t-1][j] - prices[j]) for j < i
```

### Solution
```javascript
function maxProfitK(prices, k) {
  if (prices.length === 0) return 0;
  
  if (k >= prices.length / 2) {
    // Greedy: sum all positive differences
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
      profit += Math.max(0, prices[i] - prices[i - 1]);
    }
    return profit;
  }
  
  const dp = Array(k + 1).fill().map(() => Array(prices.length).fill(0));
  
  for (let t = 1; t <= k; t++) {
    let maxDiff = -prices[0];
    for (let i = 1; i < prices.length; i++) {
      dp[t][i] = Math.max(dp[t][i - 1], prices[i] + maxDiff);
      maxDiff = Math.max(maxDiff, dp[t - 1][i - 1] - prices[i]);
    }
  }
  
  return dp[k][prices.length - 1];
}
```

---

## Question 5: Maximum Subarray (Apple)
**"Find contiguous subarray with largest sum."**

### JS Clue 5.1
```javascript
// Kadane's algorithm
// Track current sum and max sum
// Reset if current sum goes negative
```

### JS Clue 5.2
```javascript
// current = max(num, current + num)
// max = max(max, current)
```

### Solution
```javascript
function maxSubArray(nums) {
  let current = nums[0];
  let maxSum = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    maxSum = Math.max(maxSum, current);
  }
  
  return maxSum;
}
```

---

## Question 6: Stock Span (Google)
**"For each day, find how many consecutive days price was less than or equal to today."**

### JS Clue 6.1
```javascript
// Span at day i = i - previous greater element index
// Use stack to track previous greater
```

### JS Clue 6.2
```javascript
// While stack not empty and prices[stack.top] <= prices[i]
// Pop until find greater
// Span = i - stack.top (or i+1 if empty)
```

### Solution
```javascript
function stockSpan(prices) {
  const span = [];
  const stack = [];
  
  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[stack[stack.length - 1]] <= prices[i]) {
      stack.pop();
    }
    
    span[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
    stack.push(i);
  }
  
  return span;
}
```

---

## Key Takeaways

```
┌─────────────────────────────────────────────────────────┐
│         STOCK PROFIT VARIATIONS                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  CORE PATTERN: Track minimum/maximum while iterating   │
│                 Update best answer on the fly           │
│                                                         │
│  VARIATIONS:                                            │
│  1. Basic (unlimited transactions)                     │
│  2. Cooldown (can't buy after selling)                  │
│  3. Transaction fee (subtract fee each transaction)    │
│  4. K transactions (DP with state)                      │
│  5. Maximum subarray (related but different)           │
│  6. Stock span (previous greater element)             │
│                                                         │
│  KEY INSIGHT: DP states (hold vs cash)                │
│               hold[i] = max profit while holding        │
│               cash[i] = max profit while not holding   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Keywords that signal this pattern**: "Buy low sell high", "Maximum profit", "Transaction", "Stock", "K transactions", "Cooldown"
