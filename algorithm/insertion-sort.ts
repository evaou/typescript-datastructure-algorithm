namespace InsertionSort {
    function insertionSort(arr: number[]): number[] {
        if (arr.length < 2) {
            return arr;
        }

        for (let startIdx = 1; startIdx < arr.length; startIdx++) {
            let startIdxVal = arr[startIdx];
            let isInserted: boolean = false;

            for (
                let comparedIdx = startIdx - 1;
                comparedIdx >= 0;
                comparedIdx--
            ) {
                if (startIdxVal < arr[comparedIdx]) {
                    arr[comparedIdx + 1] = arr[comparedIdx];
                } else {
                    arr[comparedIdx + 1] = startIdxVal;
                    isInserted = true;
                    break;
                }
            }

            if (!isInserted) {
                arr[0] = startIdxVal;
            }
        }

        return arr;
    }

    const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
    console.log("sorted number: " + insertionSort(numbers));
}
