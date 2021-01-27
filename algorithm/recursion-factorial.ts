function findFactorialTailRecursive(num: number, base: number = 1): number {
    if (num === 0) {
        return 1;
    }

    return findFactorialTailRecursive(num - 1, num * base);
}

function findFactorialRecursive(number: number) {
    if (number <= 2) {
        return number;
    }

    let answer: number;
    answer = number * findFactorialRecursive(number - 1);

    return answer;
}

function findFactorialIterative(number: number) {
    let answer: number = 1;

    for (let i = 2; i <= number; i++) {
        answer *= i;
    }

    return answer;
}

var result: number;
result = findFactorialIterative(5);
console.log(result);

result = findFactorialRecursive(5);
console.log(result);

result = findFactorialIterative(5);
console.log(result);
