function maxProfit(prices: number[]): number {
  let maxProfit = 0;

  let low = 0;
  let high = 1;

  while (high < prices.length) {
    const currentProfit = prices[high] - prices[low];
    if (maxProfit < currentProfit) {
      maxProfit = currentProfit;
    }

    if (prices[low] > prices[high]) {
      low = high;
    }

    high++;
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
