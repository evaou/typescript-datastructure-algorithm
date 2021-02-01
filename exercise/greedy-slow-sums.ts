/*
[4, 2, 1, 3]
[1, 2, 3, 4]
[10]
7 + (7 + 2) + (7 + 2 + 1)
*/

function getTotalTime(arr: number[]): number {
  if (arr.length <= 1) {
    return 0;
  }

  arr.sort((a, b) => { return a - b });

  let penality: number;
  let totalPenality: number = 0;

  while (arr.length > 1) {
    penality = arr.pop() + arr.pop();
    totalPenality += penality;
    arr.push(penality);
  }

  return totalPenality;
}

let arr =  [4, 2, 1, 3];
console.log(getTotalTime(arr));