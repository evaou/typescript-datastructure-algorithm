function dfs(
  graph: number[][],
  result: number[],
  seen: { [key: number]: boolean },
  current: number
): void {
  if (Object.keys(seen).length === graph.length) {
    return;
  }

  result.push(current);
  seen[current] = true;

  for (let adjNode of graph[current]) {
    if (adjNode in seen) {
      continue;
    }

    dfs(graph, result, seen, adjNode);
  }
}

function graphDFS(graph: number[][]): number[] {
  let result: number[] = [];
  let seen: { [key: number]: boolean } = {};

  dfs(graph, result, seen, 0);

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

console.log(graphDFS(adjList));
