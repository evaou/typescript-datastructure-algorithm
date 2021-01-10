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

function fibonacciBottomUp(num: number): number {
    if (num < 2) {
        return num;
    }

    let fibArr = [0, 1];

    for (let i = 2; i <= num; i++) {
        fibArr.push(fibArr[i - 1] + i);
    }

    return fibArr.pop();
}

let fastFib = fibonacciDP();
console.log(fastFib(10));

console.log(fibonacciBottomUp(10));
