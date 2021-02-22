function minPathSum(grid: number[][]): number {
  let rowSize = grid.length;
  let colSize = grid[0].length;
  let dp = new Array(rowSize).fill(0).map(() => new Array(colSize).fill(0));

  for (let i = 1; i < rowSize; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i - 1][0];
  }

  for (let j = 1; j < colSize; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j - 1];
  }

  for (let i = 1; i < rowSize; i++) {
    for (let j = 1; j < colSize; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + grid[i - 1][j],
        dp[i][j - 1] + grid[i][j - 1]
      );
    }
  }

  return dp[rowSize - 1][colSize - 1] + grid[rowSize - 1][colSize - 1];
}
