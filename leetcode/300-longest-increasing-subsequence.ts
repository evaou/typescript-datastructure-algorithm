function lengthOfLIS(nums: number[]): number {
  if (nums.length <= 1) {
    return nums.length;
  }

  let size = nums.length;
  let lts = new Array(size).fill(1);
  let maxLength = 1;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        lts[i] = Math.max(lts[i], lts[j] + 1);
        maxLength = Math.max(maxLength, lts[i]);
      }
    }
  }

  return maxLength;
}
