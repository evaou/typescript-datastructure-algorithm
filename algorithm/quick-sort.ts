// worst time: O(N^2), best time: O(NlogN)
// space: O(logN)
function quickSort(array: number[], left: number, right: number): number[] {
  if (left >= right) {
    return;
  }

  let pivot: number = right;
  pivot = partition(array, left, right - 1, pivot);
  quickSort(array, left, pivot - 1);
  quickSort(array, pivot + 1, right);

  return array;
}

function partition(
  array: number[],
  left: number,
  right: number,
  pivot: number
): number {
  let pivotValue = array[pivot];
  let i: number = left;
  let j: number = right;

  while (true) {
    while (array[i] < pivotValue) {
      i++;
    }

    while (array[j] > pivotValue) {
      j--;
    }

    if (i < j) {
      swap(array, i, j);
    } else {
      swap(array, i, pivot);
      break;
    }
  }

  return i;
}

function swap(arr: number[], idx1: number, idx2: number): void {
  let tmpVal: number;

  tmpVal = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmpVal;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log("sorted number: " + quickSort(numbers, 0, numbers.length - 1));
