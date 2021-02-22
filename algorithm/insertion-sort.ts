// worst time: O(N^2), best time: O(N)
// space: O(1)
function insertionSort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }

  let current: number;
  let isInserted: boolean;

  for (let j = 1; j < arr.length; j++) {
    current = arr[j];
    isInserted = false;

    for (let i = j - 1; i >= 0; i--) {
      if (current < arr[i]) {
        arr[i + 1] = arr[i];
      } else {
        arr[i + 1] = current;
        isInserted = true;
        break;
      }
    }

    if (!isInserted) {
      arr[0] = current;
    }
  }

  return arr;
}
