function findMaxProduct(arr: number[]): number[] {
  let result: number[] = [];
  let max1 = 0;
  let max2 = 0;
  let max3 = 0;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max1) {
      max3 = max2;
      max2 = max1;
      max1 = arr[index];
    } else if (arr[index] > max2) {
      max3 = max2;
      max2 = arr[index];
    } else if (arr[index] > max3) {
      max3 = arr[index];
    }

    if (index < 2) {
      result.push(-1);
    } else {
      result.push(max1 * max2 * max3);
    }
  }

  return result;
}

let arr = [1, 2, 3, 4, 5];
console.log(findMaxProduct(arr));
