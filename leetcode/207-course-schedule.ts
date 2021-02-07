namespace leetcode207 {
  function bfs(
    startCourse,
    queue: number[],
    adjList: number[][],
    seen: {}
  ): boolean {
    while (queue.length > 0) {
      let current = queue.shift();
      seen[current] = true;

      if (current === startCourse) {
        return false;
      }

      for (let adjCourse of adjList[current]) {
        if (!seen[adjCourse]) {
          queue.push(adjCourse);
        }
      }
    }

    return true;
  }

  // time: O(N^3), space: O(N^2)
  function canFinish2(numCourses: number, prerequisites: number[][]): boolean {
    let adjList: number[][] = new Array(numCourses).fill(0).map(() => []);

    buildAdjList(prerequisites, adjList);

    for (let course = 0; course < numCourses; course++) {
      let queue = [];

      for (let adjCourse of adjList[course]) {
        queue.push(adjCourse);
      }

      if (!bfs(course, queue, adjList, {})) {
        return false;
      }
    }

    return true;
  }

  function buildAdjList(prerequisites: number[][], adjList: number[][]): void {
    for (let pair of prerequisites) {
      adjList[pair[1]].push(pair[0]);
    }
  }

  function buildInDegree(prerequisites: number[][], inDegree: number[]): void {
    for (let pair of prerequisites) {
      inDegree[pair[0]]++;
    }
  }

  function topologicalSort(
    adjList: number[][],
    inDegree: number[],
    sorted: number[]
  ): boolean {
    for (let index = 0; index < inDegree.length; index++) {
      if (inDegree[index] === 0) {
        sorted.push(index);
      }
    }

    let currentIndex = 0;
    while (currentIndex < sorted.length) {
      let currentCourse = sorted[currentIndex];

      for (let adjCourse of adjList[currentCourse]) {
        inDegree[adjCourse]--;
        if (inDegree[adjCourse] === 0) {
          sorted.push(adjCourse);
        }
      }

      currentIndex++;
    }

    if (sorted.length < adjList.length) {
      return false;
    }

    return true;
  }

  // time: O(N^2), space: O(N^2)
  function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    let adjList: number[][] = new Array(numCourses).fill(0).map(() => []);
    let inDegree: number[] = new Array(numCourses).fill(0);

    buildAdjList(prerequisites, adjList);
    buildInDegree(prerequisites, inDegree);

    let sortedCourses: number[] = [];
    return topologicalSort(adjList, inDegree, sortedCourses);
  }

  let numCourses = 3;
  let prerequisites = [
    [0, 1],
    [0, 2],
    [1, 2],
  ];
  console.log(canFinish(numCourses, prerequisites));
}
