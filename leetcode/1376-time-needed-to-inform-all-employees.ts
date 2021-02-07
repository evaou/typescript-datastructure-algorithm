namespace leetcode1376 {
  function dfs(
    currentId: number,
    adjList: number[][],
    informTime: number[]
  ): number {
    if (adjList[currentId].length === 0) {
      return 0;
    }

    let maxTime = 0;
    for (let childId of adjList[currentId]) {
      maxTime = Math.max(maxTime, dfs(childId, adjList, informTime));
    }

    return maxTime + informTime[currentId];
  }

  function buildAdjList(adjList: number[][], manager: number[]): void {
    for (let index = 0; index < manager.length; index++) {
      let managerId = manager[index];
      if (managerId === -1) {
        continue;
      }

      adjList[managerId].push(index);
    }
  }

  // time: O(N), space: O(N)
  function numOfMinutes(
    n: number,
    headID: number,
    manager: number[],
    informTime: number[]
  ): number {
    let adjList: number[][] = manager.map(() => []);
    buildAdjList(adjList, manager);

    return dfs(headID, adjList, informTime);
  }

  let n = 7;
  let headID = 6;
  let manager = [1, 2, 3, 4, 5, 6, -1];
  let informTime = [0, 6, 5, 4, 3, 2, 1];

  console.log(numOfMinutes(n, headID, manager, informTime));
}
