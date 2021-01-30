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

function dfs(
  matrix: number[][],
  row: number,
  col: number,
  seen: boolean[][],
  values: number[]
) {
  if (
    row < 0 ||
    row >= matrix.length ||
    col < 0 ||
    col >= matrix[0].length ||
    seen[row][col]
  ) {
    return;
  }

  seen[row][col] = true;
  values.push(matrix[row][col]);

  for (let dir of directions) {
    dfs(matrix, row + dir[0], col + dir[1], seen, values);
  }
}

function traverseDFS(matrix): number[] {
  let seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));
  let values = [];

  dfs(matrix, 0, 0, seen, values);

  return values;
}

console.log(traverseDFS(matrix));
