function graphBFS(graph: number[][]): number[] {
  let result: number[] = [];
  let queue: number[] = [0];
  let seen = new Set();

  while (queue.length > 0) {
    let current = queue.shift();
    result.push(current);
    seen.add(current);

    for (let adjNode of graph[current]) {
      if (seen.has(adjNode)) {
        continue;
      }
      queue.push(adjNode);
    }
  }

  return result;
}

let adjList = [
  [1, 3],
  [0],
  [3, 8],
  [0, 2, 4, 5],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2],
];

console.log(graphBFS(adjList));
