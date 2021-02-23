// time: O(N)
// space: O(1)
function twoSum(numbers: number[], target: number): number[] {
  let leftIdx = 0;
  let rightIdx = numbers.length - 1;
  let sum: number;

  while (true) {
    sum = numbers[leftIdx] + numbers[rightIdx];

    if (sum === target) {
      break;
    } else if (sum > target) {
      rightIdx--;
    } else {
      leftIdx++;
    }
  }

  return [leftIdx + 1, rightIdx + 1];
}
