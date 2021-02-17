// time: O(MN), space: O(max(M, N))
// bottom-up recursion with optimized memorization
function longestCommonSubsequence(text1: string, text2: string): number {
  let longText: string;
  let shortText: string;

  if (text1.length >= text2.length) {
    longText = text1;
    shortText = text2;
  } else {
    longText = text2;
    shortText = text1;
  }

  const dp = new Array(2)
    .fill(0)
    .map(() => new Array(longText.length + 1).fill(0));

  for (let i = 1; i <= shortText.length; i++) {
    for (let j = 1; j <= longText.length; j++) {
      if (shortText[i - 1] === longText[j - 1]) {
        dp[i % 2][j] = dp[(i - 1) % 2][j - 1] + 1;
      } else {
        dp[i % 2][j] = Math.max(dp[i % 2][j - 1], dp[(i - 1) % 2][j]);
      }
    }
  }

  return dp[shortText.length % 2][longText.length];
}

let text1 = "abc";
let text2 = "def";

console.log(longestCommonSubsequence(text1, text2)); // 0 
