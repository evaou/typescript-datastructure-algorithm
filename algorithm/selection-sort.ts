// worst time: O(N^2), best time: O(N^2)
// space: O(1)
function selectionSort(arr: number[]): number[] {
  let minValIdx: number;

  for (let targetIdx = 0; targetIdx < arr.length - 1; targetIdx++) {
    minValIdx = targetIdx;
    for (
      let currentIdx = targetIdx + 1;
      currentIdx < arr.length;
      currentIdx++
    ) {
      if (arr[currentIdx] < arr[minValIdx]) {
        minValIdx = currentIdx;
      }
    }

    if (minValIdx != targetIdx) {
      swap(arr, targetIdx, minValIdx);
    }
  }

  return arr;
}

function swap(arr: number[], idx1: number, idx2: number): void {
  let tmpVal: number;

  tmpVal = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmpVal;
}
