function longestPalindrome(s: string): string {
  if (s.length === 1) {
    return s;
  }

  let result: string = "";
  let size = s.length;
  let p = new Array(size).fill(0).map(() => new Array(size).fill(false));
  let tmpStr: string;

  for (let i = 0; i < size; i++) {
    p[i][i] = true;
  }

  for (let i = size - 1; i >= 0; i--) {
    for (let j = i; j < size; j++) {
      if (s[i] === s[j] && (j - i <= 2 || p[i + 1][j - 1])) {
        p[i][j] = true;
        tmpStr = s.substring(i, j + 1);
        if (tmpStr.length >= result.length) {
          result = tmpStr;
        }
      }
    }
  }

  return result;
}
