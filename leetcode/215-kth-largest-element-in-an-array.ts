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

function quickSort(
    nums: number[],
    startIdx: number,
    endIdx: number,
    kIdx: number
) {
    if (startIdx >= endIdx) {
        return;
    }

    let pivotIdx = endIdx;
    pivotIdx = partition(nums, startIdx, endIdx - 1, pivotIdx);
    if (pivotIdx === kIdx) {
        return;
    }

    quickSort(nums, pivotIdx + 1, endIdx, kIdx);
    quickSort(nums, startIdx, pivotIdx - 1, kIdx);
}

function findKthLargest(nums: number[], k: number): number {
    let kIdx = nums.length - k;
    quickSort(nums, 0, nums.length - 1, kIdx);

    return nums[kIdx];
}
