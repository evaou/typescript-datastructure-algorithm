function longestPalindromeSubseq(s: string): number {
  if (s.length <= 1) {
    return s.length;
  }

  let size = s.length;
  let p = new Array(size).fill(0).map(() => new Array(size).fill(0));
  let maxLength = 0;

  for (let i = 0; i < size; i++) {
    p[i][i] = 1;
  }

  for (let i = size - 1; i >= 0; i--) {
    for (let j = i + 1; j < size; j++) {
      if (s[i] === s[j]) {
        p[i][j] = p[i + 1][j - 1] + 2;
      } else {
        p[i][j] = Math.max(p[i + 1][j], p[i][j - 1]);
      }

      maxLength = Math.max(maxLength, p[i][j]);
    }
  }

  return maxLength;
}
