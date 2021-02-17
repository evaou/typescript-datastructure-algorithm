const dirs = [
  [-1, -2],
  [1, -2],
  [2, -1],
  [2, 1],
  [-1, 2],
  [1, 2],
  [-2, -1],
  [-2, 1],
];

function knightProbabilityRecursive(
  N: number,
  K: number,
  r: number,
  c: number
): number {
  if (r < 0 || r >= N || c < 0 || c >= N) {
    return 0;
  }

  if (K === 0) {
    return 1;
  }

  let prob = 0;
  for (let dir of dirs) {
    prob += knightProbabilityRecursive(N, K - 1, r + dir[0], c + dir[1]) / 8;
  }

  return prob;
}

function knightProbMem(
  N: number,
  K: number,
  r: number,
  c: number,
  dp: number[][][]
): number {
  if (r < 0 || r >= N || c < 0 || c >= N) {
    return 0;
  }

  if (K === 0) {
    return 1;
  }

  if (dp[K][r][c] !== undefined) {
    return dp[K][r][c];
  }

  let prob = 0;
  for (let dir of dirs) {
    prob += knightProbMem(N, K - 1, r + dir[0], c + dir[1], dp) / 8;
  }

  dp[K][r][c] = prob;

  return prob;
}

function knightProbabilityRecursiveMemorizeTopDown(
  N: number,
  K: number,
  r: number,
  c: number
): number {
  let dp = new Array(K + 1)
    .fill(0)
    .map(() => new Array(N).fill(0).map(() => new Array(N).fill(undefined)));
  return knightProbMem(N, K, r, c, dp);
}

function knightProbMemBottomUp(
  N: number,
  K: number,
  r: number,
  c: number,
  dp: number[][]
): number {
  if (r < 0 || r >= N || c < 0 || c >= N) {
    return;
  }

  if (K === 0) {
    return;
  }

  let newR: number;
  let newC: number;
  let prob = 0;

  for (let dir of dirs) {
    newR = r + dir[0];
    newC = c + dir[1];

    if (newR < 0 || newR >= N || newC < 0 || newC >= N) {
      continue;
    }

    return knightProbMemBottomUp(N, K - 1, newR, newC, dp);
    prob += dp[newR][newC] / 8;
  }

  dp[r][c] *= prob;

  for (let dir of dirs) {
    newR = r + dir[0];
    newC = c + dir[1];
  }
}

function knightProbabilityRecursiveMemorizeBottomUp(
  N: number,
  K: number,
  r: number,
  c: number
): number {
  let dp = new Array(N).fill(0).map(() => new Array(N).fill(1));
  knightProbMemBottomUp(N, K, r, c, dp);

  return dp[r][c];
}

function knightProbabilityMemorizeBottomUp(
  N: number,
  K: number,
  r: number,
  c: number
): number {
  const dp: number[][][] = new Array(K + 1)
    .fill(0)
    .map(() => new Array(N).fill(0).map(() => new Array(N).fill(0)));
  dp[0][r][c] = 1;

  for (let step = 1; step <= K; step++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        let preR: number;
        let preC: number;

        for (let dir of dirs) {
          preR = i + dir[0];
          preC = j + dir[1];

          if (preR < 0 || preR >= N || preC < 0 || preC >= N) {
            continue;
          }

          dp[step][i][j] += dp[step - 1][preR][preC] / 8;
        }
      }
    }
  }

  let res = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      res += dp[K][i][j];
    }
  }

  return res;
}

function knightProbabilityMemorizeBottomUp2(
  N: number,
  K: number,
  r: number,
  c: number
): number {
  let preDp: number[][] = new Array(N).fill(0).map(() => new Array(N).fill(0));
  let curDp: number[][] = new Array(N).fill(0).map(() => new Array(N).fill(0));

  preDp[r][c] = 1;

  for (let step = 1; step <= K; step++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        let preR: number;
        let preC: number;

        for (let dir of dirs) {
          preR = i + dir[0];
          preC = j + dir[1];

          if (preR < 0 || preR >= N || preC < 0 || preC >= N) {
            continue;
          }

          curDp[i][j] += preDp[preR][preC] / 8;
        }
      }
    }

    preDp = curDp;
    curDp = new Array(N).fill(0).map(() => new Array(N).fill(0));
  }

  let res = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      res += preDp[i][j];
    }
  }

  return res;
}

function knightProbability(N: number, K: number, r: number, c: number): number {
  let result: number;

  // time: O(8^K), space: O(8^K)
  //result = knightProbabilityRecursive(N, K, r, c);

  // time: O(N^2 * K), space: O(N^2 * K)
  //result  = knightProbabilityRecursiveMemorizeTopDown(N, K, r, c);

  // time: O(N^2 * K), space: O(N^2 * K)
  //result = knightProbabilityMemorizeBottomUp(N, K, r, c);

  // time: O(N^2 * K), space: O(N^2)
  result = knightProbabilityMemorizeBottomUp2(N, K, r, c);

  return result;
}

let N = 3;
let K = 2;
let r = 0;
let c = 0;

let prob = knightProbability(N, K, r, c);
console.log(prob);
