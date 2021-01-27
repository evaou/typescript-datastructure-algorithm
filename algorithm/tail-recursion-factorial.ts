function findFactorialTailRecursive(num: number, base: number = 1): number {
  if (num === 0) {
    return base;
  }

  return findFactorialTailRecursive(num - 1, num * base);
}

var result: number;
result = findFactorialTailRecursive(5);
console.log(result);
