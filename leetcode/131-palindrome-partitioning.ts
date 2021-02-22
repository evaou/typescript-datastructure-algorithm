function partition(s: string): string[][] {
  let result: string[][] = [];
  let current: string[] = [];

  partitionRecursive(result, current, s);

  return result;
}

function partitionRecursive(
  result: string[][],
  current: string[],
  s: string
): void {
  if (s.length === 0) {
    if (current.length > 0) {
      result.push([...current]);
    }
    return;
  }

  for (let endIdx = 0; endIdx < s.length; endIdx++) {
    if (isPalindrome(s, 0, endIdx)) {
      current.push(s.substring(0, endIdx + 1));
      partitionRecursive(result, current, s.substring(endIdx + 1));
      current.pop();
    }
  }
}

function isPalindrome(s: string, startIdx: number, endIdx: number): boolean {
  let i = startIdx;
  let j = endIdx;

  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
}