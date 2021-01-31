namespace leetcode286 {
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  function dfsTraverse(
    rooms: number[][],
    row: number,
    col: number,
    newVal: number
  ): void {
    if (
      row < 0 ||
      row >= rooms.length ||
      col < 0 ||
      col >= rooms[0].length ||
      rooms[row][col] < newVal
    ) {
      return;
    }

    rooms[row][col] = newVal;

    for (let dir of directions) {
      let nextRow = row + dir[0];
      let nextCol = col + dir[1];

      dfsTraverse(rooms, nextRow, nextCol, rooms[row][col] + 1);
    }
  }

  function dfs(rooms: number[][], gates: number[][]): void {
    for (let gate of gates) {
      dfsTraverse(rooms, gate[0], gate[1], 0);
    }
  }

  function bfs(rooms: number[][], gates: number[][]): void {
    let queue = gates;

    if (queue.length === 0) {
      return;
    }

    let levelCount: number = 0;

    while (queue.length > 0) {
      if (levelCount === 0) {
        levelCount = queue.length;
      }

      let [currentRow, currentCol] = queue.shift();
      let currentVal = rooms[currentRow][currentCol];

      levelCount--;

      for (let dir of directions) {
        let nextRow = currentRow + dir[0];
        let nextCol = currentCol + dir[1];

        if (
          nextRow < 0 ||
          nextRow >= rooms.length ||
          nextCol < 0 ||
          nextCol >= rooms[0].length ||
          rooms[nextRow][nextCol] <= 0
        ) {
          continue;
        }

        if (rooms[nextRow][nextCol] > currentVal + 1) {
          rooms[nextRow][nextCol] = currentVal + 1;
          queue.push([nextRow, nextCol]);
        }
      }
    }
  }

  // time: O(N), space: O(N) for dfs
  function wallsAndGates(rooms: number[][]): number[][] {
    if (rooms.length === 0) {
      return rooms;
    }

    let gates: number[][] = [];

    for (let row = 0; row < rooms.length; row++) {
      for (let col = 0; col < rooms[0].length; col++) {
        if (rooms[row][col] === 0) {
          gates.push([row, col]);
        }
      }
    }

    //bfs(rooms, gates);
    dfs(rooms, gates);

    return rooms;
  }

  let rooms = [
    [Infinity, -1, 0, Infinity],
    [Infinity, Infinity, Infinity, -1],
    [Infinity, -1, Infinity, -1],
    [0, -1, Infinity, Infinity],
  ];

  console.log(wallsAndGates(rooms));
}
