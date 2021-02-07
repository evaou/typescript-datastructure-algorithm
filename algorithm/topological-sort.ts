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
