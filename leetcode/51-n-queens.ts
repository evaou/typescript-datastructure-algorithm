function solveNQueens(n: number): string[][] {
  let rows = new Array(n).fill(-1);
  let result: string[][] = [];

  solveNQueensBacktracking(result, rows, 0);

  return result;
}

function solveNQueensBacktracking(
  result: string[][],
  rows: number[],
  row: number
): void {
  let size = rows.length;

  if (row === size) {
    let board = new Array(size).fill(0).map(() => new Array(size).fill("."));

    let layout: string[] = [];
    for (let i = 0; i < size; i++) {
      board[i][rows[i]] = "Q";
      let str = board[i].join("");
      layout.push(str);
    }

    result.push(layout);
  } else {
    for (let col = 0; col < size; col++) {
      rows[row] = col;

      if (isValid(rows, row)) {
        solveNQueensBacktracking(result, rows, row + 1);
      }

      rows[row] = -1;
    }
  }
}

function isValid(rows: number[], row: number): boolean {
  let tmpRow: number;
  let tmpCol: number;
  let col = rows[row];

  for (let i = 0; i < row; i++) {
    tmpCol = rows[i];
    tmpRow = i;

    if (tmpCol === col || Math.abs(tmpCol - col) === Math.abs(tmpRow - row)) {
      return false;
    }
  }

  return true;
}
