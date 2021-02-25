// time: O(N^2)
// space: O(N)
function wordBreak(s: string, wordDict: string[]): boolean {
  let wordSet = new Set(wordDict);
  let dp = new Array(s.length + 1).fill(false);

  dp[0] = true;

  for (let endIdx = 0; endIdx < s.length; endIdx++) {
    for (let startIdx = 0; startIdx <= endIdx; startIdx++) {
      if (dp[startIdx] && wordSet.has(s.substring(startIdx, endIdx + 1))) {
        dp[endIdx + 1] = true;
        break;
      }
    }
  }

  return dp[s.length];
}
