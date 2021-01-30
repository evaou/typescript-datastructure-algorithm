let matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

let directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

// time: O(N), space: O(N)
function traverseBFS(
  matrix: number[][],
  startRow: number,
  startCol: number
): number[] {
  let seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));
  let values = [matrix[startRow][startCol]];
  let queue: number[][] = [[startRow, startCol]];
  let row: number;
  let col: number;

  seen[startRow][startCol] = true;

  while (queue.length > 0) {
    [row, col] = queue.shift();

    for (let dir of directions) {
      let newRow = row + dir[0];
      let newCol = col + dir[1];

      if (
        newRow < 0 ||
        newRow >= matrix.length ||
        newCol < 0 ||
        newCol >= matrix[0].length ||
        seen[newRow][newCol]
      ) {
        continue;
      }

      seen[newRow][newCol] = true;
      values.push(matrix[newRow][newCol]);
      queue.push([newRow, newCol]);
    }
  }

  return values;
}

console.log(traverseBFS(matrix, 2, 2));
