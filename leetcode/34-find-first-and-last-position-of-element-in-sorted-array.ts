function binarySearch(
  nums: number[],
  target: number,
  startIdx: number,
  endIdx: number
): number {
  let left = startIdx;
  let right = endIdx;

  while (left <= right) {
    let mid = Math.trunc((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

function searchRange(nums: number[], target: number): number[] {
  let targetStartIdx = -1;
  let targetEndIdx = -1;

  let oriTargetIdx = binarySearch(nums, target, 0, nums.length - 1);
  if (oriTargetIdx === -1) {
    return [targetStartIdx, targetEndIdx];
  }

  let targetIdx = oriTargetIdx;
  while (targetIdx !== -1) {
    targetStartIdx = targetIdx;
    targetIdx = binarySearch(nums, target, 0, targetIdx - 1);
  }

  targetIdx = oriTargetIdx;
  while (targetIdx !== -1) {
    targetEndIdx = targetIdx;
    targetIdx = binarySearch(nums, target, targetIdx + 1, nums.length - 1);
  }

  return [targetStartIdx, targetEndIdx];
}
