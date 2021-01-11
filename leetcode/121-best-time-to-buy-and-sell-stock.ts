let maxPriceToEnd: number[];

function maxProfit(prices: number[]): number {
    maxPriceToEnd = buildMaxPrice(prices);

    return maxProfitRecursive(prices, 0);
}

function buildMaxPrice(prices: number[]): number[] {
    let maxPriceToEnd = new Array(prices.length);
    let maxValue = prices[prices.length - 1];
    maxPriceToEnd[prices.length - 1] = maxValue;

    for (let i = prices.length - 2; i >= 0; i--) {
        maxValue = Math.max(prices[i], maxValue);
        maxPriceToEnd[i] = maxValue;
    }

    return maxPriceToEnd;
}

function maxProfitRecursive(prices: number[], index: number): number {
    if (index >= prices.length - 1) {
        return 0;
    }

    let first = -prices[index] + maxPriceToEnd[index + 1];
    let second = maxProfitRecursive(prices, index + 1);

    return Math.max(first, second);
}

function maxProfitIterative(prices: number[]): number {
    if (!prices || prices.length < 2) {
        return 0;
    }

    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    }

    return maxProfit;
}

let prices: number[];
prices = [7, 1, 5, 3, 6, 4]; // 5
//prices = [7, 6, 4, 3, 1]; // 0

console.log(maxProfitIterative(prices));
