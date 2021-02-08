// time: O(N + N*E) -> O(N*E), space: O(N)
function bellmanFord(times: number[][], n: number, k: number): number {
  let distance = new Array(n).fill(Infinity); // N

  distance[k - 1] = 0;

  for (let i = 0; i < n - 1; i++) { // N
    let count = 0;

    for (let time of times) { // E
      let start = time[0];
      let end = time[1];
      let weight = time[2];
      let newDistance = distance[start - 1] + weight;

      if (newDistance < distance[end - 1]) {
        distance[end - 1] = newDistance;
        count++;
      }
    }

    if (count === 0) {
      break;
    }
  }

  let maxDistance = Math.max(...distance);

  return maxDistance === Infinity ? -1 : maxDistance;
}
