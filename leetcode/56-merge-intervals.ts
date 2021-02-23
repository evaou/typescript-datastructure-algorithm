// time: O(NlogN)
// space: O(N)
function merge(intervals: number[][]): number[][] {
  let sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  let result: number[][] = [];
  let start = sortedIntervals[0][0];
  let end = sortedIntervals[0][1];

  for (let i = 1; i < sortedIntervals.length; i++) {
    let interval = sortedIntervals[i];

    if (interval[0] <= end) {
      end = Math.max(end, interval[1]);
    } else {
      result.push([start, end]);
      start = interval[0];
      end = interval[1];
    }
  }

  result.push([start, end]);

  return result;
}
