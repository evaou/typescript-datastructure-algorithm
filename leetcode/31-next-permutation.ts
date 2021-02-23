function nextPermutation(nums: number[]): void {
  let i: number;
  let j: number;

  for (i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      for (j = nums.length - 1; j >= 0; j--) {
        if (nums[j] > nums[i]) {
          break;
        }
      }

      swap(nums, i, j);
      break;
    }
  }

  reverse(nums, i + 1);
}

function swap(nums: number[], i: number, j: number): void {
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

function reverse(nums: number[], start: number): void {
  let end = nums.length - 1;

  while (start < end) {
    swap(nums, start, end);
    start++;
    end--;
  }
}
