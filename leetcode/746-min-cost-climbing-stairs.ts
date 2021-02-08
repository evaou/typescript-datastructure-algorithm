// time: O(N), space: O(1)
function minCostBottomUp(
  stair: number,
  cost: number[],
  dpOne: number,
  dpTwo: number
): number {
  if (stair === cost.length) {
    return Math.min(dpOne, dpTwo);
  }

  let currentCost = cost[stair] + Math.min(dpOne, dpTwo);
  dpOne = dpTwo;
  dpTwo = currentCost;

  return minCostBottomUp(stair + 1, cost, dpOne, dpTwo);
}

function minCostClimbingStairsBottomUp(cost: number[]): number {
  if (cost.length === 0) {
    return 0;
  }

  if (cost.length === 1) {
    return cost[0];
  }

  let dpOne = cost[0];
  let dpTwo = cost[1];

  return minCostBottomUp(2, cost, dpOne, dpTwo);
}

function minCost(stair: number, cost: number[], dp: number[]): number {
  if (stair <= 1) {
    return cost[stair];
  }

  if (dp[stair] !== undefined) {
    return dp[stair];
  }

  dp[stair] =
    cost[stair] +
    Math.min(minCost(stair - 2, cost, dp), minCost(stair - 1, cost, dp));

  return dp[stair];
}

// time: O(N), space: O(N)
function minCostClimbingStairsTopDown(cost: number[]): number {
  const n = cost.length;
  const dp = [];

  return Math.min(minCost(n - 1, cost, dp), minCost(n - 2, cost, dp));
}

// time: O(N), space: O(N)
function minCostClimbingStairsIterative(cost: number[]): number {
  let dp = [];

  for (let index = 0; index < cost.length; index++) {
    if (index < 2) {
      dp.push(cost[index]);
      continue;
    }

    dp.push(cost[index] + Math.min(dp[index - 1], dp[index - 2]));
  }

  return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
}
