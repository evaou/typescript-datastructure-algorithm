function reverseWords(s: string): string {
  let strArr = s.split('');

  reverse(strArr, 0, strArr.length - 1);
  reverseEachWord(strArr);
  return cleanSpace(strArr);
}

function reverse(strArr: string[], startIdx: number, endIdx: number): void {
  let i = startIdx;
  let j = endIdx;
  let tmp: string;

  while (i < j) {
    tmp = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = tmp;

    i++;
    j--;
  }
}

function reverseEachWord(strArr: string[]): void {
  let i = 0;
  let j = 0;
  let length = strArr.length;

  while (j < length) {
    while (i < j || (i < length && strArr[i] === ' ')) i++;
    while (j < i || (j < length && strArr[j] !== ' ')) j++;
    reverse(strArr, i, j - 1);
  }
}

function cleanSpace(strArr: string[]): string {
  let i = 0;
  let j = 0;
  let length = strArr.length;

  while (j < length) {
    while (j < length && strArr[j] === ' ') j++;
    while (j < length && strArr[j] !== ' ') strArr[i++] = strArr[j++];
    while (j < length && strArr[j] === ' ') j++;

    if (j < length) strArr[i++] = ' ';
  }

  return strArr.slice(0, i).join('');
}

function reverseWords2(s: string): string {
  let wordArr = s
    .split(/(\s+)/)
    .filter((e) => e.trim().length > 0)
    .reverse();

  return wordArr.join(' ');
}

let s = 'the sky is blue';
console.log(reverseWords(s));
