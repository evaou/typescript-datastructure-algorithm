function bubbleSort(arr: number[]): number[] {
    for (let endIdx = arr.length - 1; endIdx > 0; endIdx--) {
        for (let startIdx = 0; startIdx < endIdx; startIdx++) {
            if (arr[startIdx] > arr[endIdx]) {
                swap(arr, startIdx, endIdx);
            }
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

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log("sorted number: " + bubbleSort(numbers));
