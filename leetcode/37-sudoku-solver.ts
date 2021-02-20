namespace leetcode37 {
  function isValid(
    numVal: string,
    row: { [key: string]: boolean },
    col: { [key: string]: boolean },
    box: { [key: string]: boolean }
  ): boolean {
    if (row[numVal] || col[numVal] || box[numVal]) {
      return false;
    } else {
      return true;
    }
  }

  function solveBacktrack(
    board: string[][],
    rows: { [key: string]: boolean }[],
    cols: { [key: string]: boolean }[],
    boxes: { [key: string]: boolean }[],
    r: number,
    c: number
  ): boolean {
    if (r === board.length || c === board[0].length) {
      return true;
    } else {
      if (board[r][c] === ".") {
        for (let num = 1; num <= 9; num++) {
          let numVal = num.toString();
          board[r][c] = numVal;

          let row = rows[r];
          let col = cols[c];
          let boxId = getBoxId(r, c);
          let box = boxes[boxId];

          if (isValid(numVal, row, col, box)) {
            row[numVal] = true;
            col[numVal] = true;
            box[numVal] = true;

            if (c === board[0].length - 1) {
              if (solveBacktrack(board, rows, cols, boxes, r + 1, 0)) {
                return true;
              }
            } else {
              if (solveBacktrack(board, rows, cols, boxes, r, c + 1)) {
                return true;
              }
            }

            delete row[numVal];
            delete col[numVal];
            delete box[numVal];
          }

          board[r][c] = ".";
        }
      } else {
        if (c === board[0].length - 1) {
          if (solveBacktrack(board, rows, cols, boxes, r + 1, 0)) {
            return true;
          }
        } else {
          if (solveBacktrack(board, rows, cols, boxes, r, c + 1)) {
            return true;
          }
        }
      }
    }

    return false;
  }

  function getBoxId(r: number, c: number): number {
    return 3 * Math.floor(r / 3) + Math.floor(c / 3);
  }

  function solveSudoku(board: string[][]): void {
    let length = board.length;
    let rows = new Array(length);
    let cols = new Array(length);
    let boxes = new Array(length);

    for (let i = 0; i < length; i++) {
      rows[i] = {};
      cols[i] = {};
      boxes[i] = {};
    }

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (board[i][j] !== ".") {
          let val = board[i][j];
          let boxId = getBoxId(i, j);

          rows[i][val] = true;
          cols[j][val] = true;
          boxes[boxId][val] = true;
        }
      }
    }

    solveBacktrack(board, rows, cols, boxes, 0, 0);
  }

  let board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ];
  solveSudoku(board);
  console.log(board);
}
