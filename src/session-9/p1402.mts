function maxSatisfaction(satisfaction: number[]): number {
  satisfaction.sort((a, b) => b - a);

  let totalSum = 0;
  let cumulativeSum = 0;

  for (const satisfactionLevel of satisfaction) {
    cumulativeSum += satisfactionLevel;

    if (cumulativeSum > 0) {
      totalSum += cumulativeSum;
    } else {
      break;
    }
  }

  return totalSum;
}

console.log(maxSatisfaction([-1, -8, 0, 5, -9]));
console.log(maxSatisfaction([4, 3, 2]));
console.log(maxSatisfaction([-1, -4, -5]));
