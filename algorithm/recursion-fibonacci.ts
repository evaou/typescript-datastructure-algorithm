function fibonacciIterative(num: number): number {
  if (num <= 1) {
    return num;
  }

  let sum: number;
  let first: number = 0;
  let second: number = 1;

  for (let i = 2; i <= num; i++) {
    sum = first + second;
    first = second;
    second = sum;
  }

  return sum;
}

function fibonacciRecursive(num): number {
  if (num <= 1) {
    return num;
  }

  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}

console.log(fibonacciIterative(6));
console.log(fibonacciRecursive(6));
