let cache: { [key: number]: number } = {};

function climbStairs(n: number): number {
    if (n <= 2) {
        return n;
    }

    if (n in cache) {
        return cache[n];
    }

    cache[n] = climbStairs(n - 1) + climbStairs(n - 2);

    return cache[n];
}

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
