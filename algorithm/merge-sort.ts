// time: O(NlogN)
// space: O(N)
function mergeSort(array: number[]): number[] {
  if (array.length === 1) {
    return array;
  }

  let midIdx: number = Math.floor(array.length / 2);
  let left: number[] = array.slice(0, midIdx);
  let right: number[] = array.slice(midIdx);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
  let result: number[] = [];
  let leftIdx: number = 0;
  let rightIdx: number = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] <= right[rightIdx]) {
      result.push(left[leftIdx]);
      leftIdx++;
    } else {
      result.push(right[rightIdx]);
      rightIdx++;
    }
  }

  if (leftIdx < left.length) {
    result = result.concat(left.slice(leftIdx));
  }

  if (rightIdx < right.length) {
    result = result.concat(right.slice(rightIdx));
  }

  return result;
}
