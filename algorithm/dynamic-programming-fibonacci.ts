function fibonacciDP() {
    let cache: { [key: number]: number } = {};

    return function fib(num: number): number {
        if (num in cache) {
            return cache[num];
        }

        if (num < 2) {
            cache[num] = num;
            return cache[num];
        }

        cache[num] = fib(num - 1) + fib(num - 2);

        return cache[num];
    };
}

let fastFib = fibonacciDP();

console.log(fastFib(10));
