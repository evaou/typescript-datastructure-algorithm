function buildAdjList(times: number[][], adjList: number[][][]): void {
  let source: number;
  let target: number;
  let weight: number;

  for (let edge of times) {
    source = edge[0];
    target = edge[1];
    weight = edge[2];

    adjList[source - 1].push([target - 1, weight]);
  }
}

function dijkstra(times: number[][], n: number, k: number): number {
  const distance = new Array(n).fill(Infinity); // O(N)
  const adjList = distance.map(() => []); // O(N)
  const heap = new PriorityQueue((a, b) => {
    distance[a] < distance[b];
  });

  distance[k - 1] = 0;
  heap.push(k - 1);
  buildAdjList(times, adjList); // O(E)

  while (!heap.isEmpty()) {
    let currentVertex = heap.pop(); // O(NlogN)

    for (let [adjVertex, adjWeight] of adjList[currentVertex]) {
      let newDistance = distance[currentVertex] + adjWeight;
      if (newDistance < distance[adjVertex]) {
        distance[adjVertex] = newDistance;
        heap.push(adjVertex); // O(ElogN)
      }
    }
  }

  let maxDistance = Math.max(...distance);

  return maxDistance === Infinity ? -1 : maxDistance;
}
