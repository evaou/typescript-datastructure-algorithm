namespace leetcode200 {
  let directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  function bfs(grid: string[][], queue: number[][]) {
    while (queue.length > 0) {
      let [currentRow, currentCol] = queue.shift();

      for (let dir of directions) {
        let newRow = currentRow + dir[0];
        let newCol = currentCol + dir[1];

        if (
          newRow < 0 ||
          newRow >= grid.length ||
          newCol < 0 ||
          newCol >= grid[0].length
        ) {
          continue;
        }

        if (grid[newRow][newCol] === "1") {
          grid[newRow][newCol] = "0";
          queue.push([newRow, newCol]);
        }
      }
    }
  }

  // time: O(M * N), space: O(max(M, N)) for BFS, O(M * N) for DFS
  function numIslands(grid: string[][]): number {
    if (grid.length === 0) {
      return 0;
    }

    let islandCount = 0;
    let queue = [];

    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
        if (grid[row][col] === "1") {
          grid[row][col] = "0";
          queue.push([row, col]);
          islandCount++;
          bfs(grid, queue);
        }
      }
    }

    return count;
  }
}
