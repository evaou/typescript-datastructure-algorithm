function countSubstrings(s: string): number {
  const size = s.length;
  let p = new Array(size).fill(0).map(() => new Array(size).fill(false));
  let count = 0;

  for (let i = 0; i < size; i++) {
    p[i][i] = true;
  }

  for (let i = size - 1; i >= 0; i--) {
    for (let j = i; j <= size - 1; j++) {
      if (s[i] === s[j] && (j - i <= 2 || p[i + 1][j - 1])) {
        count++;
        p[i][j] = true;
      }
    }
  }

  return count;
}
