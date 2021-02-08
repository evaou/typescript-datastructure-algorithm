namespace leetcode743 {
  class PriorityQueue {
    _heap: number[];
    _comparator: any;

    constructor(
      comparator = (a, b) => {
        a > b;
      }
    ) {
      this._comparator = comparator;
      this._heap = [];
    }

    size(): number {
      return this._heap.length;
    }

    isEmpty(): boolean {
      return this.size() === 0;
    }

    peek(): number {
      return this._heap[0];
    }

    _parentIdx(currentIdx: number): number {
      return Math.floor((currentIdx - 1) / 2);
    }

    _leftChildIdx(currentIdx): number {
      return 2 * currentIdx + 1;
    }

    _rightChildIdx(currentIdx): number {
      return 2 * currentIdx + 2;
    }

    _swap(idx1: number, idx2: number) {
      let tmpValue = this._heap[idx1];
      this._heap[idx1] = this._heap[idx2];
      this._heap[idx2] = tmpValue;
    }

    _compare(idx1: number, idx2: number): boolean {
      return this._comparator(this._heap[idx1], this._heap[idx2]);
    }

    _shiftUp(): void {
      let currentIdx = this.size() - 1;
      let parentIdx = this._parentIdx(currentIdx);

      while (currentIdx > 0 && this._compare(currentIdx, parentIdx)) {
        this._swap(currentIdx, parentIdx);
        currentIdx = parentIdx;
        parentIdx = this._parentIdx(currentIdx);
      }
    }

    _shiftDown(): void {
      let currentIdx = 0;
      let leftChildIdx = this._leftChildIdx(currentIdx);
      let rightChildIdx = this._rightChildIdx(currentIdx);
      let maxChildIdx = this._compare(leftChildIdx, rightChildIdx)
        ? leftChildIdx
        : rightChildIdx;

      while (
        maxChildIdx < this.size() &&
        this._compare(maxChildIdx, currentIdx)
      ) {
        this._swap(currentIdx, maxChildIdx);

        currentIdx = maxChildIdx;
        leftChildIdx = this._leftChildIdx(currentIdx);
        rightChildIdx = this._rightChildIdx(currentIdx);
        maxChildIdx = this._compare(leftChildIdx, rightChildIdx)
          ? leftChildIdx
          : rightChildIdx;
      }
    }

    push(value: number): number {
      this._heap.push(value);
      this._shiftUp();

      return this.size();
    }

    pop(): number {
      if (this.size() > 1) {
        this._swap(0, this.size() - 1);
      }

      let result = this._heap.pop();

      if (this.size() <= 1) {
        return result;
      }

      this._shiftDown();

      return result;
    }
  }

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

  // dijkstra, time: O(ElogN), space: O(E + N)
  function networkDelayTime2(times: number[][], n: number, k: number): number {
    const distance = new Array(n).fill(Infinity); // N
    const adjList = distance.map(() => []); // N
    const heap = new PriorityQueue((a, b) => {
      distance[a] < distance[b];
    });

    distance[k - 1] = 0;
    heap.push(k - 1);
    buildAdjList(times, adjList); // E

    while (!heap.isEmpty()) {
      let currentVertex = heap.pop(); // NlogN

      for (let [adjVertex, adjWeight] of adjList[currentVertex]) {
        let newDistance = distance[currentVertex] + adjWeight;
        if (newDistance < distance[adjVertex]) {
          distance[adjVertex] = newDistance;
          heap.push(adjVertex); // ElogN
        }
      }
    }

    let maxDistance = Math.max(...distance);

    return maxDistance === Infinity ? -1 : maxDistance;
  }

  // bellman-ford, time: O(NE), space: O(N)
  function networkDelayTime(times: number[][], n: number, k: number): number {
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
}
