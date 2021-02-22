// time: O(N^2), space: O(1)
function bubbleSort(arr: number[]): number[] {
  let isSwapped: boolean;

  for (let endIdx = arr.length - 1; endIdx > 0; endIdx--) {
    isSwapped = false;

    for (let startIdx = 0; startIdx < endIdx; startIdx++) {
      if (arr[startIdx] > arr[startIdx + 1]) {
        swap(arr, startIdx, startIdx + 1);
        isSwapped = true;
      }
    }

    if (!isSwapped) {
      break;
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
