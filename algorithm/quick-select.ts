function swap(nums: number[], leftIdx: number, rightIdx: number): void {
    let tmpVal = nums[leftIdx];
    nums[leftIdx] = nums[rightIdx];
    nums[rightIdx] = tmpVal;
}

function partition(
    nums: number[],
    leftIdx: number,
    rightIdx: number,
    pivotIdx: number
): number {
    let pivotVal = nums[pivotIdx];

    while (true) {
        while (nums[leftIdx] < pivotVal) {
            leftIdx++;
        }

        while (nums[rightIdx] >= pivotVal) {
            rightIdx--;
        }

        if (leftIdx >= rightIdx) {
            swap(nums, leftIdx, pivotIdx);
            break;
        } else {
            swap(nums, leftIdx, rightIdx);
        }
    }

    return leftIdx;
}

function quickSelect(
    nums: number[],
    startIdx: number,
    endIdx: number,
    kIdx: number
): number {
    if (startIdx >= endIdx) {
        return nums[startIdx];
    }

    let pivotIdx = endIdx;
    pivotIdx = partition(nums, startIdx, endIdx - 1, pivotIdx);
    if (pivotIdx === kIdx) {
        return nums[kIdx];
    } else if (pivotIdx < kIdx) {
        return quickSelect(nums, pivotIdx + 1, endIdx, kIdx);
    } else {
        return quickSelect(nums, startIdx, pivotIdx - 1, kIdx);
    }
}
