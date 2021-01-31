namespace leetcode994 {
  let directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  // time: O(N), space: O(N)
  function orangesRotting(grid: number[][]): number {
    if (!grid.length) {
      return 0;
    }

    let rottenCount = 0;
    let freshCount = 0;
    let minute = 0;
    let queue: number[][] = [];

    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
        let orangeStatus = grid[row][col];

        if (orangeStatus === 1) {
          freshCount++;
        } else if (orangeStatus === 2) {
          queue.push([row, col]);
        }
      }
    }
    rottenCount = queue.length;

    if (!freshCount) {
      return 0;
    }

    while (queue.length) {
      if (rottenCount === 0) {
        rottenCount = queue.length;
        minute++;
      }

      let [currentRow, currentCol] = queue.shift();
      let nextRow: number;
      let nextCol: number;
      rottenCount--;

      for (let dir of directions) {
        nextRow = currentRow + dir[0];
        nextCol = currentCol + dir[1];

        if (
          nextRow < 0 ||
          nextRow >= grid.length ||
          nextCol < 0 ||
          nextCol >= grid[0].length
        ) {
          continue;
        }

        if (grid[nextRow][nextCol] === 1) {
          grid[nextRow][nextCol] = 2;
          queue.push([nextRow, nextCol]);
          freshCount--;
        }
      }
    }

    if (freshCount > 0) {
      return -1;
    }

    return minute;
  }
}
