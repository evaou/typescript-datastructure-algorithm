function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }

  if (strs.length === 1) {
    return strs[0];
  }

  let sortedStrs: string[] = strs.sort((a, b) => {
    return a.length - b.length;
  });

  let result = sortedStrs[0];

  for (let i = 1; i < sortedStrs.length; i++) {
    let str = sortedStrs[i];

    for (let j = result.length; j >= 0; j--) {
      let tmpStr = result.substring(0, j);
      if (tmpStr === str.substring(0, j)) {
        if (j === 0) {
          return "";
        } else {
          result = tmpStr;
          break;
        }
      }
    }
  }

  return result;
}
