function search(nums: number[], target: number): number {
  let leftIdx = 0;
  let rightIdx = nums.length - 1;

  while (leftIdx <= rightIdx) {
    let midIdx = Math.trunc((leftIdx + rightIdx) / 2);

    if (nums[midIdx] === target) {
      return midIdx;
    } else if (nums[midIdx] < target) {
      leftIdx = midIdx + 1;
    } else {
      rightIdx = midIdx - 1;
    }
  }

  return -1;
}
