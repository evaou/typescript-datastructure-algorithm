function coinChange(coins: number[], amount: number): number {
  if (amount === 0) {
    return 0;
  }

  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let currentAmount = 1; currentAmount <= amount; currentAmount++) {
    for (let coin of coins) {
      if (currentAmount >= coin) {
        dp[currentAmount] = Math.min(
          dp[currentAmount],
          1 + dp[currentAmount - coin]
        );
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}
